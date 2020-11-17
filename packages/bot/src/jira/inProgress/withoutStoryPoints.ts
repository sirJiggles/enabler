import config from '../../config'
import format from '../api/format'
import resource from '../api/resource'
import within from '../util/in'
import ticketLink from '../util/ticketLink'
import userMentionPostFix from '../util/user'

const withoutStoryPoints = async () => {
  const { inProgressState, issueTypesToCheck } = config.jira
  let message = ''
  const tickets = format(
    await resource(
      `"Story Points[Number]" = null and status = "${inProgressState}" and issuetype ${within(
        issueTypesToCheck,
      )}`,
    ),
  )
  tickets.forEach((ticket) => {
    message += `🔢 ${ticketLink(
      ticket.id,
    )} is ${inProgressState} but has no story points`
    message += userMentionPostFix(ticket.assignee)
  })

  return message
}

export default withoutStoryPoints
