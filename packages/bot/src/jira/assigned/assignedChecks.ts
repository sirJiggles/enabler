import resource from '../api/resource'
import format from '../api/format'
import config from '../../config/index'
import getAssignees from '../util/getAssignees'
import checkForUser from './checkForUser'

const assignedChecks = async () => {
  // get all tickets assigned to all users
  const tickets = format(await resource(`assignee in (${getAssignees()})`))

  const { users } = config
  let message = ''

  for (const user of users) {
    message += await checkForUser(user, tickets)
  }

  return message
}

export default assignedChecks
