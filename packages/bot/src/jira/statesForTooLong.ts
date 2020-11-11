import resource from './resource'
import format from './format'
import config from '../config/index'
import { IJiraTooLongState } from './types'
import userMentionPostFix from './user'
import ticketLink from './ticketLink'

const stateForTooLong = async (tooLongState: IJiraTooLongState) => {
  const { state, emoji, timeLimit } = tooLongState
  const JQL = `status = "${state}"`

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
