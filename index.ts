import { WebClient } from '@slack/web-api'
import * as dotenv from 'dotenv'
import config from './src/config'

dotenv.config()

const token = process.env.BOT_TOKEN

const web = new WebClient(token)

;(async () => {
  const res = await web.chat.postMessage({
    channel: config.channel,
    text: 'Hello there',
  })

  // `res` contains information about the posted message
  console.log('Message sent: ', res.ts)
})()
