import resource from '../api/resource'
import format from '../api/format'
import ticketLink from '../util/ticketLink'
import userMentionPostFix from '../util/user'
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
    message += `🧩 SubTask ${ticketLink(
      ticket.id,
    )} has no assignee, yet the parent issue is assigned`
    message += userMentionPostFix(ticket.assignee)
  })

  return message
}

export default noAssignedUserSubTask
