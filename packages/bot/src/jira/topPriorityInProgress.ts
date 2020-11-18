import config from '../config/index'
import format from './api/format'
import userMentionPostFix from './util/user'
import resource from './api/resource'
import ticketLink from './util/ticketLink'
import within from './util/in'
import { FormattedResponse } from './api/types'

const ticketsThatAreNotStartedLinks = (tickets: Array<FormattedResponse>) => {
  return tickets.map((ticket) => ticketLink(ticket.id)).join(',')
}

const countsAsNotStarted = (
  ticket: FormattedResponse,
  inProgressState: string,
) => {
  return ticket.status.name !== inProgressState && !ticket.assignee
}

const topPriorityInProgress = async (messagePrefix: string) => {
  const {
    issueStatusesToCheck,
    inProgressState,
    issueTypesToCheck,
  } = config.jira

  const JQL = `issuetype ${within(issueTypesToCheck)} and status ${within(
    issueStatusesToCheck,
  )} order by Rank ASC`

  const backlog = format(await resource(JQL))

  let ticketsNotStarted: Array<FormattedResponse> = []
  let foundLastInProgressItem = false
  let message = ''

  backlog.forEach((ticket) => {
    // if the ticket is not started add it to the list of un-started tickets
    if (countsAsNotStarted(ticket, inProgressState)) {
      // we add to the list of things not started
      ticketsNotStarted.push(ticket)
      // make sure we know we found the last not started, is ok to set
      // this each time logic is still the same
      foundLastInProgressItem = true
    }

    // if, on a later iteration we know we found the last item started already
    // and we find something else in progress, we found something not on top of the
    // backlog
    if (foundLastInProgressItem && ticket.status.name === inProgressState) {
      // if we find something in progress after finding something that is
      // not, it is not the highest prio, send a message about it
      message += `${messagePrefix} ${ticketLink(
        ticket.id,
      )} is in progress but ${ticketsThatAreNotStartedLinks(
        ticketsNotStarted,
      )} ${ticketsNotStarted.length > 1 ? 'are' : 'is'} above it`

      message += userMentionPostFix(ticket.assignee)
    }
  })

  return message
}

export default topPriorityInProgress
