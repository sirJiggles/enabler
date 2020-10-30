const format = (result: { issues: Array<jira.IIssue> }) => {
  return result.issues.map((issue) => {
    return {
      assignee: issue.fields.assignee.emailAddress,
      id: issue.key,
    }
  })
}

export default format
