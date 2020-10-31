import * as dotenv from 'dotenv'
import stateForTooLong from './jira/stateForTooLong'
import sendMessage from './slack/sendMessage'

const program = async () => {
  // get the env vars
  dotenv.config()

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  // build up the message to send to the bot
  let message = ''
  message += await stateForTooLong('blocked', '✋')
  message += await stateForTooLong('inProgress', '⚙️')

  await sendMessage(message)
}

export default program
