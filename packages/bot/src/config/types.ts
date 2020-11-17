// when you want to run something only on some
// days, or between some hours
export type Schedule = {
  // optional list of days to run 0-6
  days?: Array<number>
  // optional time to run start
  hourFrom?: number
  // optional time to run end
  hourUntil?: number
}

export type TooLongStateConfig = {
  state: string
  timeLimit: number
  emoji: string
  // option issue types to exclude from checks
  excludeIssueTypes?: Array<string>
  // an optional channel to post these messages in
  channel?: string
  // when you might want to run these checks
  schedule?: Schedule
}

export type UserConfig = {
  jiraAccountId: string
  slackHandle: string
  excludeFromProgressCheck?: boolean
}

export type BotConfig = {
  users: Array<UserConfig>

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

    // types of issues to check, when doing things like
    // - what is being worked on
    // - is it high prio
    // - what has story points when in progress
    // - what has sub tasks that need to be assigned
    issueTypesToCheck: Array<string>
    issueStatusesToCheck: Array<string>
    // ana array of what you define as "sub tasks" in JIRA
    subTaskTypes: Array<string>
  }
}
