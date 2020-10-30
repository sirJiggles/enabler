// config is just an object for things like team member
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
  },
}

export default config
