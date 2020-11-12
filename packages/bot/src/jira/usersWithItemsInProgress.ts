import resource from './resource'
import format from './format'
import config from '../config/index'
import getAssignees from './getAssignees'

const usersWithItemsInProgress = async (messagePrefix: string) => {
  const { inProgressState } = config.jira
  // get the tickets for all users in a state
  const tickets = format(
    await resource(
      `assignee in (${getAssignees()}) and status = "${inProgressState}"`,
    ),
  )

  // go through each user and if they do not have a ticket from the results
  // they do not have any work on right now so add a message
  let message = ''
  const { users } = config
  const assigneesWithTickets = tickets.map((ticket) => ticket.assignee)

  users.forEach((user) => {
    if (!user.excludeFromProgressCheck) {
      const usersInProgressTickets = assigneesWithTickets.filter(
        (assignee) => assignee === user.jiraAccountId,
      )
      if (usersInProgressTickets.length > 1) {
        message += `${messagePrefix} @${user.slackHandle}, you have more than one issue in the state ${inProgressState}\n`
      }
      if (usersInProgressTickets.length === 0) {
        message += `${messagePrefix} @${user.slackHandle}, you have no tickets in the state ${inProgressState}\n`
      }
    }
  })

  return message
}

export default usersWithItemsInProgress
