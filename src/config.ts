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
    // to work out if people are working on the highest priority
    // issues we need to know the priority names and the order of
    // them for you in JIRA, the order is IMPORTANT here
    // set them from highest to lowest, highest at 0 index
    priorities: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
    // to work out if people are working on highest priority issues
    // we need to know the states where the work is 'done' and should
    // not be compared
    doneStates: ['Done', 'Closed', 'Resolved'],
  },
}

export default config
