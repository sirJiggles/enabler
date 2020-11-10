import config from '../config/index'
import format from './format'
import userMentionPostFix from './user'
import resource from './resource'

const topPriorityInProgress = async (messagePrefix: string) => {
  const { priorityCheck, inProgressState } = config.jira
  const { typesToCheck, inTheStatus } = priorityCheck

  const JQL = `issuetype in (${typesToCheck
    .map((s) => `"${s}"`)
    .join(',')}) and status in (${inTheStatus
    .map((s) => `"${s}"`)
    .join(',')}, "${inProgressState}") order by Rank ASC`

  const backlog = format(await resource(JQL))

  let lastInProgressFound = false
  let message = ''

  backlog.forEach((ticket) => {
    if (!lastInProgressFound) {
      if (ticket.status.name !== inProgressState) {
        // at this point we have reached a ticket that is not
        // in progress. ANYTHING after this is bellow top prio
        lastInProgressFound = true
      }
    }
    if (lastInProgressFound && ticket.status.name === inProgressState) {
      // if we find something in progress after finding something that is
      // not, it is not the highest prio, send a message about it
      message += `${messagePrefix} ticket ${ticket.id} is in progress and not top of the backlog`
      message += userMentionPostFix(ticket.assignee)
    }
  })

  return message
}

export default topPriorityInProgress
