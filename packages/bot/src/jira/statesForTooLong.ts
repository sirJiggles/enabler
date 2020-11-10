import resource from './resource'
import format from './format'
import config from '../config'
import { IJiraTooLongState } from './types'
import userMentionPostFix from './user'

const stateForTooLong = async (tooLongState: IJiraTooLongState) => {
  const { state, emoji, timeLimit } = tooLongState
  const JQL = `status = "${state}" and not status changed after -${timeLimit}d`

  // get the tickets in the state for too long
  const tickets = format(await resource(JQL))

  // create a message about it for the right user
  let message = ''
  tickets.forEach((ticket) => {
    message += `${emoji} ${ticket.id} has been ${state} a while`
    message += userMentionPostFix(ticket.assignee)
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
