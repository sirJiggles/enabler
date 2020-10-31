import resource from './resource'
import format from './format'
import config from '../config'
import { IJiraQueryStates } from './types'

const stateForTooLong = async (
  state: IJiraQueryStates,
  messagePrefix: string,
) => {
  const { timeLimit, statusName } = config.jira[state]
  // get the tickets in the state for too long
  const tickets = format(
    await resource(
      `status = "${statusName}" and not status changed after -${timeLimit}d`,
    ),
  )

  // @TODO maybe move the rest out later as it is another responsibility
  // could be something like message user, pass in message without user name

  // create a message about it for the right user
  let message = ''
  tickets.forEach((ticket) => {
    const user = config.users.filter(
      (user) => user.jiraAccountId === ticket.assignee,
    )[0]
    if (!user) {
      console.error('could not find the slack handle for ', ticket.assignee)
      return
    }
    message += `${messagePrefix} ${ticket.id} has been ${state} a while, @${user.slackHandle}\n`
  })

  return message
}

export default stateForTooLong
