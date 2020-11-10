// configure the application to work with your:
// - teams
// - github
// - jira
const config = {
  // how we notify users about their tickets
  users: [
    {
      jiraAccountId: '557058:37ea015e-5320-4a45-a7fc-f731050aa73f',
      slackHandle: 'gareth126',
    },
    {
      jiraAccountId: '5eeb5567a228c50ab94507e9',
      slackHandle: 'gareth',
    },
  ],

  // what channel would you like the bot to talk in?
  // this is the channel ID you can get it from going to slack
  // in the web browser and checking the URL when in the channel
  channel: 'C01DLHY6FM3',

  // JIRA configuration
  jira: {
    // this is the domain of your account so if your url is awesome.atlassian.net
    // the value here would be 'awesome'
    domain: '4ools',
    // the user you would like to make the api requests with. the API requests
    // will have the same rights as the user who has this email addr
    apiUserEmail: 'gareth126@gmail.com',
    // the JIRA project you want to search for issues in
    project: '4ooling',

    inProgressState: 'In Progress',

    // configure how long tickets can be in states
    tooLongStatuses: [
      {
        state: 'Blocked',
        timeLimit: 1,
        emoji: '✋',
      },
      {
        state: 'In Progress',
        timeLimit: 1,
        emoji: '⚙️',
      },
    ],
    // we will check the following types with the following
    // statuses against each other. note your "inProgress" status
    // name is included implicitly as we will check this list
    // against whatever is in progress
    priorityCheck: {
      typesToCheck: ['Bug', 'Story'],
      inTheStatus: ['Backlog', 'Selected for Development'],
    },
  },
}

export default config
