import resource from '../api/resource'
import format from '../api/format'
import ticketLink from '../util/ticketLink'
import config from '../../config'
import within from '../util/in'

const noAssignedUserSubTask = async () => {
  const { issueStatusesToCheck, subTaskTypes } = config.jira
  let message = ''
  const tickets = format(
    await resource(
      `issuetype ${within(
        subTaskTypes,
      )} and assignee = null and status ${within(issueStatusesToCheck)}`,
    ),
  )
  tickets.forEach((ticket) => {
    // it must have a parent tbh, is a sub task
    if (ticket.parent) {
      message += `🧩 SubTask ${ticketLink(
        ticket.id,
      )} has no assignee, yet the parent issue (${ticketLink(
        ticket.parent.id,
      )}) is assigned`
    }
  })

  return message
}

export default noAssignedUserSubTask
