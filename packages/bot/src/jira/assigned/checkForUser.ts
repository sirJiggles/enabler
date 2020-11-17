import config from '../../config/index'
import { UserConfig } from '../../config/types'
import { FormattedResponse } from '../api/types'
import subTasksAssigned from './subTasksAssigned'

const checkForUser = async (
  user: UserConfig,
  tickets: Array<FormattedResponse>,
) => {
  let message = ''

  const usersAssignedTickets = tickets.filter(
    (t) => t.assignee === user.jiraAccountId,
  )

  for (const ticket of usersAssignedTickets) {
    message += await subTasksAssigned(ticket)
  }

  return message
}

export default checkForUser
