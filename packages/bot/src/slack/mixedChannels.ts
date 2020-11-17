import statesForTooLong from '../jira/statesForTooLong'

// anything that might be sent to many channels
const mixedChannels = async () => {
  return await statesForTooLong()
}

export default mixedChannels
