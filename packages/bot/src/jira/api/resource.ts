import config from '../../config/index'
import * as ax from 'axios'

// I know it is global but it does not need to be exported from the file
// and tbh .. who cur 🤷‍♀️
const axios = ax.default

// here we just get something from JIRA by a resource
// it could be tickets/1 or something like that, we do not care about
// that we just handle the headers and the GET request
// if we remove / post / put later we can rename this func
const resource = async (jql: string) => {
  if (!process.env.JIRA_TOKEN) {
    throw new Error(
      'You need to set the JIRA_TOKEN in the .env file, take a look at secrets in the readme',
    )
  }

  // get the parts of the jira config we care about out
  const { domain, apiUserEmail, project } = config.jira

  const jiraAuthHeader = `${apiUserEmail}:${process.env.JIRA_TOKEN}`

  // prefix all JQL with the project from the config in one place
  const jqlWithProject = `Project = ${project} AND ${jql}`

  // how many blocked tickets do we have
  try {
    const response = await axios.get(
      `https://${domain}.atlassian.net/rest/api/3/search?jql=${encodeURIComponent(
        jqlWithProject,
      )}`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(jiraAuthHeader).toString(
            'base64',
          )}`,
          Accept: 'application/json',
        },
      },
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw new Error(error)
  }
}

export default resource
