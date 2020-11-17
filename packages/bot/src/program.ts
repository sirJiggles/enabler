import * as dotenv from 'dotenv'
import sendSlackMessages from './slack/sendSlackMessages'

const program = async () => {
  // get the env vars
  dotenv.config({
    path: process.env.PRODUCTION ? '.env.prod' : undefined,
  })

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  // send the slack messages
  await sendSlackMessages()
}

export default program
