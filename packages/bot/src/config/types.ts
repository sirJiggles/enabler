export type TooLongStateConfig = {
  state: string
  timeLimit: number
  emoji: string
  excludeIssueTypes?: Array<string>
}

export type BotConfig = {
  users: Array<{
    jiraAccountId: string
    slackHandle: string
    excludeFromProgressCheck?: boolean
  }>

  // what channel would you like the bot to talk in?
  // this is the channel ID you can get it from going to slack
  // in the web browser and checking the URL when in the channel
  channel: string

  // JIRA configuration
  jira: {
    inProgressState: string

    // this is the domain of your account so if your url is awesome.atlassian.net
    // the value here would be 'awesome'
    domain: string
    // the user you would like to make the api requests with. the API requests
    // will have the same rights as the user who has this email addr
    apiUserEmail: string
    // the JIRA project you want to search for issues in
    project: string
    tooLongStatuses: Array<TooLongStateConfig>
    // we will check the following types with the following
    // statuses against each other. note your "inProgress" status
    // name is included implicitly as we will check this list
    // against whatever is in progress
    priorityCheck: {
      typesToCheck: Array<string>
      inTheStatus: Array<string>
    }
  }
}
