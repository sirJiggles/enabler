import { WebClient } from '@slack/web-api'
import * as dotenv from 'dotenv'
import blocked from './jira/blocked'
import config from './config'

const program = async () => {
  // get the env vars
  dotenv.config()

  // make sure to handle any errors
  process.on('unhandledRejection', (error) => {
    console.error('Got an unhandled error', error)
  })

  const blockedTickets = await blocked()

  // lets build a sample message
  let message = ''
  blockedTickets.forEach((ticket) => {
    const user = config.users.filter(
      (user) => user.jiraEmail === ticket.assignee,
    )[0]
    if (!user) {
      console.error('could not find the slack handle for ', ticket.assignee)
      return
    }
    message += `Ticket ${ticket.id} is blocked @${user.slackHandle}, is alles gucci?\n`
  })

  const web = new WebClient(process.env.BOT_TOKEN)

  const res = await web.chat.postMessage({
    channel: config.channel,
    text: message,
  })

  // // `res` contains information about the posted message
  console.log('Message sent: ', res.ts)
}

export default program
