// configure the application to work with your:
// - teams
// - github
// - jira
const config = {
  // how we notify users about their tickets
  users: [
    {
      jiraEmail: 'gareth126@gmail.com',
      slackHandle: 'gareth126',
    },
    {
      jiraEmail: 'gareth.fuller@qualifyze.com',
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
    blocked: {
      // how long can a ticket be in the blocked state before
      // a slack notification is sent in days
      timeLimit: 1,
      // what you call the blocked state in JIRA, needs to be used in jql
      statusName: 'Blocked',
    },
    inProgress: {
      // how long can a ticket be in the in progress state before
      // a slack notification is sent in days
      timeLimit: 1,
      // what you call the in progress state in JIRA, needs to be used
      //in jql
      statusName: 'In Progress',
    },
  },
}

export default config
