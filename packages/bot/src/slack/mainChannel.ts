import inProgressChecks from '../jira/inProgress/inProgressChecks'
import noAssignedUserSubTask from '../jira/subTasks/noAssignedUserSubTask'
import topPriorityInProgress from '../jira/topPriorityInProgress'
import sendMessage from '../slack/util/sendMessage'
import { MixedMessages } from './types'

// things that always go to the main channel
const mainChannel = async (mixedMessages: Array<MixedMessages>) => {
  // build up the message to send to the bot
  let messages = ''
  messages += await inProgressChecks()
  messages += await topPriorityInProgress('↕️')
  messages += await noAssignedUserSubTask()

  // pull out main channel messages from mixed ones
  messages += mixedMessages
    .filter((m) => !m.customChannel)
    .map((m) => m.message)
    .join('')

  // if there is something to send, send it in slack
  if (messages !== '') {
    console.log('sending on the main channel\n', messages)
    await sendMessage(messages)
  }
}

export default mainChannel
