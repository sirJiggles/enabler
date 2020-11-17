import config from '../../config'
import { FormattedResponse } from './types'

const format = (result: {
  issues: Array<jira.IIssue>
}): Array<FormattedResponse> => {
  const storyPointConfig = config.jira.storyPointCustomField
  return result.issues.map((issue) => {
    // most the time we only care about a sub set of the jira data
    return {
      assignee: issue.fields.assignee?.accountId,
      id: issue.key,
      status: issue.fields.status,
      storyPoints: issue.fields[storyPointConfig] as string | null,
    }
  })
}

export default format
