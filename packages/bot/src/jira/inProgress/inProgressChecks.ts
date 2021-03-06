import resource from '../api/resource'
import format from '../api/format'
import config from '../../config/index'
import getAssignees from '../util/getAssignees'
import checkForUser from './checkForUser'
import withoutStoryPoints from './withoutStoryPoints'
import within from '../util/in'

const inProgressChecks = async () => {
  const { inProgressState, issueTypesToCheck } = config.jira
  // get the tickets for all users in a state
  const tickets = format(
    await resource(
      `assignee in (${getAssignees()}) and status = "${inProgressState}" and issuetype ${within(
        issueTypesToCheck,
      )}`,
    ),
  )

  // go through each user and if they do not have a ticket from the results
  // they do not have any work on right now so add a message
  let message = ''
  const { users } = config

  users.forEach((user) => {
    message += checkForUser(user, tickets)
  })

  message += await withoutStoryPoints()

  return message
}

export default inProgressChecks
