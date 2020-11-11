import * as dotenv from 'dotenv'
import statesForTooLong from './jira/statesForTooLong'
import topPriorityInProgress from './jira/topPriorityInProgress'
import usersWithNothingInProgress from './jira/usersWithNothingInProgress'
import sendMessage from './slack/sendMessage'

const program = async () => {
  // get the env vars
  dotenv.config({
    path: process.env.PRODUCTION ? '.env.prod' : undefined,
  })

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  // build up the message to send to the bot
  let mainChannelMessages = ''
  mainChannelMessages += await usersWithNothingInProgress('🚨')
  mainChannelMessages += await topPriorityInProgress('↕️')

  const messagesForManyChannels = await statesForTooLong()
  // pull out messages for main channel and add them
  mainChannelMessages += messagesForManyChannels
    .filter((m) => !m.customChannel)
    .map((m) => m.message)
    .join('')

  // if there is something to send, send it in slack
  if (mainChannelMessages !== '') {
    console.log('sending on the main channel', mainChannelMessages)
    await sendMessage(mainChannelMessages)
  }

  // now handle the other channels
  const otherChannelMessages = messagesForManyChannels.filter(
    (m) => m.customChannel,
  )

  if (otherChannelMessages) {
    for (const item of otherChannelMessages) {
      console.log(`sending message in ${item.customChannel}: ${item.message}`)
      await sendMessage(item.message, item.customChannel)
    }
  }
}

export default program
