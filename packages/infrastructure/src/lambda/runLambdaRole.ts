import * as aws from '@pulumi/aws'

const runLambdaRole = () => {
  // Configure IAM so that the AWS Lambda can be run.
  return new aws.iam.Role('enablerBotLambdaRunner', {
    assumeRolePolicy: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'sts:AssumeRole',
          Principal: {
            Service: 'lambda.amazonaws.com',
          },
          Effect: 'Allow',
          Sid: '',
        },
      ],
    },
  })
}

export default runLambdaRole
