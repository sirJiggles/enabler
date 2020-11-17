import { FormattedResponse } from '../api/types'

import resource from '../api/resource'
import format from '../api/format'
import ticketLink from '../util/ticketLink'
import userMentionPostFix from '../util/user'

const subTasksAssigned = async (ticket: FormattedResponse) => {
  let message = ''
  const subTasks = format(await resource(`"Parent Link" = ${ticket.id}`))
  subTasks.forEach((subTask) => {
    if (!subTask.assignee) {
      message += `🧩 SubTask ${ticketLink(
        subTask.id,
      )} has no assignee, yet the parent issue (${ticketLink(
        ticket.id,
      )}) is assigned`
      message += userMentionPostFix(ticket.assignee)
    }
  })

  return message
}

export default subTasksAssigned
