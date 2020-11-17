import { MixedMessages } from './types'
import sendMessage from './util/sendMessage'

// anything that is not for the main channel
const otherChannels = async (mixedMessages: Array<MixedMessages>) => {
  const otherChannelMessages = mixedMessages.filter((m) => m.customChannel)

  if (otherChannelMessages) {
    for (const item of otherChannelMessages) {
      console.log(`sending message in ${item.customChannel}\n ${item.message}`)
      await sendMessage(item.message, item.customChannel)
    }
  }
}

export default otherChannels
