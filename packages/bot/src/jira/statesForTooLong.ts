import resource from './resource'
import format from './format'
import config from '../config/index'
import userMentionPostFix from './user'
import ticketLink from './ticketLink'
import { TooLongStateConfig } from '../config/types'
import isWithinSchedule from './isWithinSchedule'

const stateForTooLong = async (tooLongState: TooLongStateConfig) => {
  const {
    state,
    emoji,
    timeLimit,
    excludeIssueTypes,
    channel,
    schedule,
  } = tooLongState

  // if there is a schedule to run this job for, check if we are within
  // it first before doing anything
  if (!isWithinSchedule(schedule)) {
    return
  }

  let JQL = `status = "${state}"`

  // if we want to exclude some issue types from the too long check
  if (excludeIssueTypes) {
    JQL += ` and issueType not in (${excludeIssueTypes.join(',')})`
  }
  // get the tickets in the state for too long
  const tickets = format(await resource(JQL))

  // create a message about it for the right user
  let message = ''
  tickets.forEach((ticket) => {
    if (ticket.daysInState >= timeLimit) {
      message += `${emoji} ${ticketLink(ticket.id)} has been ${state} for ${
        ticket.daysInState
      } days`
      message += userMentionPostFix(ticket.assignee)
    }
  })

  if (message) {
    return {
      customChannel: channel,
      message,
    }
  }
}

const statesForTooLong = async () => {
  const { tooLongStatuses } = config.jira

  // not just a string message here as we could post to many channels
  const messages = []

  for (const tooLongStatus of tooLongStatuses) {
    const message = await stateForTooLong(tooLongStatus)
    if (message) {
      messages.push(message)
    }
  }

  return messages
}

export default statesForTooLong
