import resource from '../api/resource'
import format from '../api/format'
import ticketLink from '../util/ticketLink'
import config from '../../config'
import within from '../util/in'
import userMentionPostFix from '../util/user'

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
    // and if the parent issue is assigned
    if (ticket.parent && ticket.parent.assignee) {
      message += `🧩 SubTask ${ticketLink(
        ticket.id,
      )} has no assignee, yet the parent issue (${ticketLink(
        ticket.parent.id,
      )}) is assigned`
      message += userMentionPostFix(ticket.parent.assignee)
    }
  })

  return message
}

export default noAssignedUserSubTask
