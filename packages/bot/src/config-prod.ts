// configure the application to work with your:
// - teams
// - github
// - jira
const config = {
  // how we notify users about their tickets
  users: [
    {
      jiraAccountId: '5ee3a361a7a4030ab398ae2d',
      slackHandle: 'garik',
    },
    {
      jiraAccountId: '5eeb5567a228c50ab94507e9',
      slackHandle: 'gareth',
    },
    {
      jiraAccountId: '5f3bc0d1323607003889e418',
      slackHandle: 'boris',
    },
    {
      jiraAccountId: '5eeb5566b364ce0abe6a7ce7',
      slackHandle: 'falco',
    },
    {
      jiraAccountId: '5eeb5568e571480ac2a61c8d',
      slackHandle: 'jorge',
    },
    {
      jiraAccountId: '5eeb556802b4400ac4cf580c',
      slackHandle: 'richard',
    },
    {
      jiraAccountId: '5eeb5568868ce30ac4b71d3e',
      slackHandle: 'gregor',
    },
    {
      jiraAccountId: '5f4cab9b91e67a003f231f04',
      slackHandle: 'pablo',
    },
  ],

  // what channel would you like the bot to talk in?
  // this is the channel ID you can get it from going to slack
  // in the web browser and checking the URL when in the channel
  channel: 'C89L7PP1C',

  // JIRA configuration
  jira: {
    // this is the domain of your account so if your url is awesome.atlassian.net
    // the value here would be 'awesome'
    domain: 'qualifyze',
    // the user you would like to make the api requests with. the API requests
    // will have the same rights as the user who has this email addr
    apiUserEmail: 'gareth126@gmail.com',
    // the JIRA project you want to search for issues in
    project: 'QC',
    blocked: {
      // how long can a ticket be in the blocked state before
      // a slack notification is sent in days
      timeLimit: 2,
      // what you call the blocked state in JIRA, needs to be used in jql
      statusName: 'Blocked',
    },
    inProgress: {
      // how long can a ticket be in the in progress state before
      // a slack notification is sent in days
      timeLimit: 3,
      // what you call the in progress state in JIRA, needs to be used
      //in jql
      statusName: 'In Progress',
    },
    informationNeeded: {
      timeLimit: 2,
      statusName: 'Information Needed',
    },
    // we will check the following types with the following
    // statuses against each other. note your "inProgress" status
    // name is included implicitly as we will check this list
    // against whatever is in progress
    priorityCheck: {
      typesToCheck: ['Bug', 'Story'],
      inTheStatus: ['To Do'],
    },
  },
}

export default config
