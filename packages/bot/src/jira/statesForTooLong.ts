import resource from './resource'
import format from './format'
import config from '../config/index'
import userMentionPostFix from './user'
import ticketLink from './ticketLink'
import { TooLongStateConfig } from '../config/types'

const stateForTooLong = async (tooLongState: TooLongStateConfig) => {
  const { state, emoji, timeLimit, excludeIssueTypes } = tooLongState
  let JQL = `status = "${state}"`

  // if we want to exclude some issue types from the too long check
  if (excludeIssueTypes) {
    JQL += ` and issueType not in (${excludeIssueTypes.join(',')})`
  }
  // get the tickets in the state for too long
  const tickets = format(await resource(JQL))

  // create a message about it for the right user
  let message = ''
  tickets.forEach((ticket) => {
    if (ticket.daysInState >= timeLimit) {
      message += `${emoji} ${ticketLink(ticket.id)} has been ${state} for ${
        ticket.daysInState
      } days`
      message += userMentionPostFix(ticket.assignee)
    }
  })

  return message
}

const statesForTooLong = async () => {
  const { tooLongStatuses } = config.jira

  let message = ''

  for (const tooLongStatus of tooLongStatuses) {
    message += await stateForTooLong(tooLongStatus)
  }

  return message
}

export default statesForTooLong
