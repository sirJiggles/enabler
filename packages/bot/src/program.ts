import * as dotenv from 'dotenv'
import statesForTooLong from './jira/statesForTooLong'
import topPriorityInProgress from './jira/topPriorityInProgress'
import usersWithNothingInProgress from './jira/usersWithNothingInProgress'
import sendMessage from './slack/sendMessage'

const program = async () => {
  // get the env vars
  dotenv.config({
    path: process.env.ENV_PATH || undefined,
  })

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  // build up the message to send to the bot
  let message = ''
  message += await statesForTooLong()
  message += await usersWithNothingInProgress('🚨')
  message += await topPriorityInProgress('↕️')

  // if there is something to send, send it in slack
  if (message !== '') {
    await sendMessage(message)
  }
}

export default program
