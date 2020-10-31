import resource from './resource'
import format from './format'
import config from '../config'
import { IJiraQueryStates } from './types'
import getAssignees from './getAssignees'

const usersWithNothingInState = async (
  state: IJiraQueryStates,
  messagePrefix: string,
) => {
  const { statusName } = config.jira[state]

  // get the tickets for all users in a state
  const tickets = format(
    await resource(
      `assignee in (${getAssignees()}) and status = "${statusName}"`,
    ),
  )

  // go through each user and if they do not have a ticket from the results
  // they do not have any work on right now so add a message
  let message = ''
  const { users } = config
  const assigneesWithTickets = tickets.map((ticket) => ticket.assignee)
  users.forEach((user) => {
    if (!assigneesWithTickets.includes(user.jiraAccountId)) {
      message += `${messagePrefix} @${user.slackHandle}, you have no tickets in the state ${state}\n`
    }
  })

  return message
}

export default usersWithNothingInState
