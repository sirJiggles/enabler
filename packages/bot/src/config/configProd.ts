// configure the application to work with your:
// - teams
// - github

import { BotConfig } from './types'

const configProd: BotConfig = {
  users: [
    {
      slackHandle: 'Simon',
      jiraAccountId: '5efd8f07deb6ca0baa31e0a7',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'Amar',
      jiraAccountId: '60c70a91758a5d006aa9f1e2',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'Diana Berenguer',
      jiraAccountId: '607585d32d8a8c006d33cbf6',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'carla',
      jiraAccountId: '5f04d251591bbc001b58df6f',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'fabio',
      jiraAccountId: '5f74805a60299600769fd503',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'phjardas',
      jiraAccountId: '60b608a75fa6f1006f9ba4a9',
    },
    {
      slackHandle: 'Rodrigo Muñoz',
      jiraAccountId: '60421b53c668f4006a2a31e4',
      excludeFromProgressCheck: true,
    },
    {
      slackHandle: 'nawres',
      jiraAccountId: '5f468511d3796e00466b86c4',
      excludeFromProgressCheck: true,
    },
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
      jiraAccountId: '5eeb5568868ce30ac4b71d3e',
      slackHandle: 'gregor',
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f4cab9b91e67a003f231f04',
      slackHandle: 'pablo',
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f04d2521a26ad0014f31698',
      slackHandle: 'vero',
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f1a81ac07efc4002867e620',
      slackHandle: 'cesc',
      excludeFromProgressCheck: true,
    },
  ],
  channel: 'C89L7PP1C',
  jira: {
    domain: 'qualifyze',
    apiUserEmail: 'gareth.fuller@qualifyze.com',
    inProgressState: 'In Progress',
    issueTypesToCheck: ['Bug', 'Story'],
    issueStatusesToCheck: ['To Do', 'In Progress'],
    subTaskTypes: ['Subtask', 'Sub-task'],
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
        state: 'In Review',
        timeLimit: 2,
        emoji: '✅',
        // in the review channel
        channel: 'C01A3PR49R9',
      },
      {
        state: 'Done',
        timeLimit: 2,
        emoji: '🚀',
        excludeIssueTypes: ['Subtask', 'Sub-task'],
      },
      {
        state: 'Information Needed',
        timeLimit: 3,
        emoji: '❓',
        channel: 'C014BMXFTPD',
      },
      {
        state: 'Ice Box',
        timeLimit: 3,
        emoji: '🧊',
        channel: 'C014BMXFTPD',
      },
      {
        state: 'New',
        timeLimit: 3,
        emoji: '✨',
        channel: 'C014BMXFTPD',
      },
      {
        state: 'To Do',
        timeLimit: 3,
        emoji: '📝',
        excludeIssueTypes: ['Subtask', 'Sub-task'],
      },
    ],
  },
}

export default configProd
