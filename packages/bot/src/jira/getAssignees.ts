import config from '../config'

// just get jira assignees in JQL format for queries
const getAssignees = () => {
  const { users } = config
  return users.map((user) => user.jiraAccountId).join(',')
}

export default getAssignees
