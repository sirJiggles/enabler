import { FormattedResponse } from './types'

const format = (result: {
  issues: Array<jira.IIssue>
}): Array<FormattedResponse> => {
  return result.issues.map((issue) => {
    return {
      assignee: issue.fields.assignee?.accountId,
      id: issue.key,
      status: issue.fields.status,
    }
  })
}

export default format
