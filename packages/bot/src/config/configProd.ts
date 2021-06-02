// configure the application to work with your:
// - teams
// - github

import { BotConfig } from './types'

const configProd: BotConfig = {
  users: [
    {
      slackHandle: 'vladimir',
      jiraAccountId: '60b60895367bda00716080f2',
    },
    {
      slackHandle: 'Philipp Jardas',
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
