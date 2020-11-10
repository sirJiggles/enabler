import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

const bridge = (name: string, arn: pulumi.Input<string>, schedule: string) => {
  const rule = new aws.cloudwatch.EventRule(`${name}-rule`, {
    // run it every ten mins, this should be moved into a config
    // scheduleExpression: '0 10,15 * * *',
    scheduleExpression: `cron(${schedule})`,
    description: 'Enabler bot',
  })

  const target = new aws.cloudwatch.EventTarget(`${name}-target`, {
    rule: rule.name,
    arn,
  })

  return target
}

export default bridge
