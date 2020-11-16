import { BotConfig } from './types'

const configDefault: BotConfig = {
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
  channel: 'C01DLHY6FM3',
  jira: {
    includeWeekends: false,
    domain: '4ools',
    apiUserEmail: 'gareth126@gmail.com',
    project: '4ooling',
    inProgressState: 'In Progress',
    tooLongStatuses: [
      {
        state: 'Blocked',
        timeLimit: 9,
        emoji: '✋',
        channel: 'C01F8J31RFS',
      },
      {
        state: 'In Progress',
        timeLimit: 1,
        emoji: '⚙️',
        excludeIssueTypes: ['Epic'],
        schedule: {
          days: [1],
          hourFrom: 22,
          hourUntil: 23,
        },
      },
    ],
    priorityCheck: {
      typesToCheck: ['Bug', 'Story'],
      inTheStatus: ['Backlog', 'Selected for Development'],
    },
  },
}

export default configDefault
