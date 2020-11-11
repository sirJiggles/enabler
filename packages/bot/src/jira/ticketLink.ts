import config from '../config'

// markdown ticket link for a ticket id in JIRA
const ticketLink = (ticketId: string) => {
  return `<http://${config.jira.domain}.atlassian.net/browse/${ticketId}|${ticketId}>`
}

export default ticketLink
