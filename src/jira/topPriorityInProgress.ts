import config from '../config'
import format from './format'
import resource from './resource'

const topPriorityInProgress = async (messagePrefix: string) => {
  const { priorities, doneStates, inProgress } = config.jira

  const orderedTickets = format(
    await resource(
      `status not in (${doneStates.join(',')}) order by priority DESC`,
    ),
  )

  const assigned = orderedTickets.filter(
    (ticket) => ticket.assignee !== undefined,
  )
  const unassigned = orderedTickets.filter(
    (ticket) => ticket.assignee === undefined,
  )
  let message = ''
  // this is a nested loop, so if you have a shit load of tickets
  // or team members do not do this, maybe do same fancy reducer or
  // something :D but for our backlog and team this is cool 😎
  // or even better just make the JQL more specific by adding more
  // states to ignore in the config or something
  assigned.forEach((assignedTicket) => {
    unassigned.forEach((unassignedTicket) => {
      // we check if the priority is greater here, it seems like an issue
      // but it is right as if assigned is 1, and unassigned is 0 then
      // 1 is further along the array, this "down" the priority
      // than 0
      if (
        priorities.indexOf(assignedTicket.priority) >
        priorities.indexOf(unassignedTicket.priority)
      ) {
        // we only care if the issue that is assigned is in progress
        // if it is, it should not be
        if (assignedTicket.status.name === inProgress.statusName) {
          // get the user so we can message them about the ticket
          const user = config.users.filter(
            (user) => user.jiraAccountId === assignedTicket.assignee,
          )[0]
          // make a message for the bot
          message += `${messagePrefix} ticket ${assignedTicket.id} is in progress and lower priority than ${unassignedTicket.id}, @${user.slackHandle}\n`
        }
      }
    })
  })
  return message
}

export default topPriorityInProgress
