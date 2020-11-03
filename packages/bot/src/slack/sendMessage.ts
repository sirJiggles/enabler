import { WebClient } from '@slack/web-api'
import config from '../config'

const sendMessage = async (message: string) => {
  const web = new WebClient(process.env.BOT_TOKEN)

  const res = await web.chat.postMessage({
    // what channel are we posting to
    channel: config.channel,
    // should we mention people?
    link_names: true,
    // what is the final message
    text: message,
  })

  // // `res` contains information about the posted message
  console.log('Message sent: ', res.ts)
}

export default sendMessage
