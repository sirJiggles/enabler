import { FormattedResponse } from './types'

const format = (result: {
  issues: Array<jira.IIssue>
}): Array<FormattedResponse> => {
  return result.issues.map((issue) => {
    return {
      assignee: issue.fields.assignee?.accountId,
      id: issue.key,
      status: issue.fields.status,
      parent: issue.fields.parent
        ? {
            id: issue.fields.parent.key,
            status: issue.fields.parent.fields.status,
          }
        : undefined,
    }
  })
}

export default format
