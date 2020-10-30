// import { WebClient } from '@slack/web-api'
import * as dotenv from 'dotenv'
import resource from './jira/resource'

const program = async () => {
  // get the env vars
  dotenv.config()

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  // just test getting something from JIRA
  // const response = await resource('issue/createmeta')
  const blockedTickets = await resource('status = Blocked')

  console.log(blockedTickets)

  // const token = process.env.BOT_TOKEN

  // const web = new WebClient(token)

  // const res = await web.chat.postMessage({
  //   channel: config.channel,
  //   text: 'Hello there',
  // })

  // // `res` contains information about the posted message
  // console.log('Message sent: ', res.ts)
}

export default program
