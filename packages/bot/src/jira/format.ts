import config from '../config'
import diffInDays from './diffInDays'

const format = (result: { issues: Array<jira.IIssue> }) => {
  return result.issues.map((issue) => {
    // most the time we only care about a sub set of the jira data
    return {
      assignee: issue.fields.assignee?.accountId,
      id: issue.key,
      status: issue.fields.status,
      daysInState: diffInDays(
        issue.fields.statuscategorychangedate,
        config.jira.includeWeekends,
      ),
    }
  })
}

export default format
