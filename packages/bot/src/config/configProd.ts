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
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f04d2521a26ad0014f31698',
      slackHandle: 'vero',
      excludeFromProgressCheck: true,
    },
    {
      jiraAccountId: '5f92c3d29c31840076fc3d12',
      slackHandle: 'Ben Scheepers',
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
        timeLimit: 4,
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
        schedule: {
          days: [1],
          hourFrom: 8,
          hourUntil: 12,
        },
      },
      {
        state: 'Ice Box',
        timeLimit: 10,
        emoji: '🧊',
        channel: 'C014BMXFTPD',
        schedule: {
          days: [2],
          hourFrom: 8,
          hourUntil: 12,
        },
      },
      {
        state: 'New',
        timeLimit: 10,
        emoji: '✨',
        channel: 'C014BMXFTPD',
        schedule: {
          days: [3],
          hourFrom: 8,
          hourUntil: 12,
        },
      },
      {
        state: 'To Do',
        timeLimit: 10,
        emoji: '📝',
        channel: 'C014BMXFTPD',
        schedule: {
          days: [4],
          hourFrom: 8,
          hourUntil: 12,
        },
      },
    ],
  },
}

export default configProd
