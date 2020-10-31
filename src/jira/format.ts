const format = (result: { issues: Array<jira.IIssue> }) => {
  return result.issues.map((issue) => {
    // most the time we only care about a sub set of the jira data
    return {
      assignee: issue.fields.assignee?.accountId,
      id: issue.key,
      priority: issue.fields.priority.name,
      status: issue.fields.status,
    }
  })
}

export default format
