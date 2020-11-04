import * as aws from '@pulumi/aws'

const rolePolicyAttachment = (role: aws.iam.Role) => {
  new aws.iam.RolePolicyAttachment('enablerBotLambdaPolicyAttachment', {
    role,
    policyArn: aws.iam.ManagedPolicies.AWSLambdaFullAccess,
  })
}

export default rolePolicyAttachment
