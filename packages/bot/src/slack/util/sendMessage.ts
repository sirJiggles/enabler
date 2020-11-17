import { WebClient } from '@slack/web-api'
import config from '../../config/index'

const sendMessage = async (
  message: string,
  // use the main channel in the config if not defined
  channel: string = config.channel,
) => {
  const web = new WebClient(process.env.BOT_TOKEN)

  try {
    const res = await web.chat.postMessage({
      // what channel are we posting to
      channel,
      // should we mention people?
      link_names: true,
      // what is the final message
      text: message,
    })
    // res` contains information about the posted message
    console.log('Message sent: ', res.ts)
  } catch (error) {
    console.log('there was an error')
    console.log(error)
    throw new Error(`could not post message to slack ${error}`)
  }
}

export default sendMessage
