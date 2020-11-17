import config from '../../config/index'
import { UserConfig } from '../../config/types'
import { FormattedResponse } from '../api/types'
import ticketLink from '../util/ticketLink'
import userMentionPostFix from '../util/user'

const { inProgressState } = config.jira

const checkForUser = (user: UserConfig, tickets: Array<FormattedResponse>) => {
  let message = ''
  const usersInProgressTickets = tickets.filter(
    (t) => t.assignee === user.jiraAccountId,
  )

  if (!user.excludeFromProgressCheck) {
    if (usersInProgressTickets.length === 0) {
      message += `🚨 <@${user.slackHandle}>, you have no tickets in the state ${inProgressState}\n`
    }
  }

  // make sure user does not have too much on
  if (usersInProgressTickets.length > 1) {
    message += `🤹‍♂️ <@${user.slackHandle}>, you have more than one issue in the state ${inProgressState}\n`
  }

  return message
}

export default checkForUser
