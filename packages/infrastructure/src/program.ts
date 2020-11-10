import * as dotenv from 'dotenv'
import bridge from './eventBridge'
import botLambda from './lambda'

const program = () => {
  dotenv.config({
    path: process.env.PRODUCTION ? '.env.prod' : undefined,
  })

  // create the lambda for the bot
  const lambda = botLambda()

  // now run the lambda on a schedule
  // run it at 10am and 15pm on a weekday
  // const schedule = '0 10,15 ? * MON-FRI *'
  // bridge('enabler-event', lambda.arn, schedule)
  bridge('enabler-event', lambda.arn, '0 10,15 ? * MON-FRI *')
}

export default program
