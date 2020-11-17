import mainChannel from './mainChannel'
import mixedChannelMessages from './mixedChannels'
import otherChannel from './otherChannels'

const sendSlackMessages = async () => {
  const mixedMessages = await mixedChannelMessages()

  await mainChannel(mixedMessages)
  await otherChannel(mixedMessages)
}

export default sendSlackMessages
