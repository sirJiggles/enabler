// configure the application to work with your:
// - teams
// - github

import { BotConfig } from './types'

const configProd: BotConfig = {
  users: [
    {
      jiraAccountId: '5ee3a361a7a4030ab398ae2d',
      slackHandle: 'garik',
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5eeb5567a228c50ab94507e9',
      slackHandle: 'gareth',
    },
    {
      jiraAccountId: '5f3bc0d1323607003889e418',
      slackHandle: 'boris',
      excludeFromProgressCheck: true,
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
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f4cab9b91e67a003f231f04',
      slackHandle: 'pablo',
    },
  ],
  channel: 'C89L7PP1C',
  jira: {
    domain: 'qualifyze',
    apiUserEmail: 'gareth.fuller@qualifyze.com',
    inProgressState: 'In Progress',
    project: 'QC',
    tooLongStatuses: [
      {
        state: 'Blocked',
        timeLimit: 2,
        emoji: '✋',
      },
      {
        state: 'In Progress',
        timeLimit: 3,
        emoji: '⚙️',
        excludeIssueTypes: ['Epic'],
      },
      {
        state: 'Information Needed',
        timeLimit: 2,
        emoji: '❓',
      },
    ],
    priorityCheck: {
      typesToCheck: ['Bug', 'Story'],
      inTheStatus: ['To Do'],
    },
  },
}

export default configProd
