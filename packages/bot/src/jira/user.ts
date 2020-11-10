import config from '../config'

const getUser = (assignee?: string) => {
  // it should not be the case, but this func could be used incorrectly
  if (!assignee) {
    return
  }
  return config.users.filter((user) => user.jiraAccountId === assignee)[0]
}

const userMentionPostFix = (assignee?: string) => {
  if (!assignee) {
    return '\n'
  }
  const user = getUser(assignee)
  return user ? `, @${user.slackHandle}\n` : '\n'
}

export default userMentionPostFix
