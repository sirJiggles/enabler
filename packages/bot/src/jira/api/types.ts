export type FormattedResponse = {
  assignee?: string
  id: string
  status: jira.IIssueStatus
  parent?: FormattedResponse
}
