# Wha?

This package handles the infra as code for the little bot. the bot is deployed to a lambda on AWS that you can access via an API Gateway end point.

We use pulumi to manage the resources needed for the bot infra. read more about pulumi [here](https://www.pulumi.com)

## Packaging

As we deploy a zip to aws lambda we need to prepare the bot to go up to the net. for this run `yarn package` in the bot package. It will make a dist ready version of the app code with the dist node modules it needs.

## Secrets 🕵️‍♀️

I created an AWS IAM user with programmatic access to deploy resources. this gave me both: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` which I then added to my aws credentials file with a new profile name. This profile name I then set as `AWS_PROFILE` as an ENV var as per [here](https://www.pulumi.com/docs/get-started/aws/begin/).

You need to add the same secrets needed for the bot to a .env file in this package also. see the root readme for more information.
