import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import runLambdaRole from './runLambdaRole'
import rolePolicyAttachment from './rolePolicyAttachment'

// we only have one lambda right now so just make the bot lambda in the index
// if we add more we will separate 'resources' and 'uses of resources' more
// cleanly
const botLambda = () => {
  // we need to make sure we have the env vars this lambda needs
  const botToken = process.env.BOT_TOKEN
  const jiraToken = process.env.JIRA_TOKEN

  if (!botToken || !jiraToken) {
    throw new Error(
      `Need to set both BOT_TOKEN and JIRA_TOKEN in the infra application env
      file to make a lambda out of the bot`,
    )
  }

  // make the role to be able to run it
  const role = runLambdaRole()

  // attach the policy
  rolePolicyAttachment(role)

  // Next, create the Lambda function itself:
  return new aws.lambda.Function('enablerBotLambda', {
    code: new pulumi.asset.AssetArchive({
      // zip up the dist output of the bot app
      '.': new pulumi.asset.FileArchive('../bot/dist'),
    }),
    environment: {
      // these are needed to run the lambda
      variables: {
        BOT_TOKEN: botToken,
        JIRA_TOKEN: jiraToken,
      },
    },
    // we want to run the default function from the index
    handler: 'index.handler',
    runtime: 'nodejs12.x',
    role: role.arn,
  })
}

export default botLambda
