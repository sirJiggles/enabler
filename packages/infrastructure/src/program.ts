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
  // turn it off for now
  // bridge('enabler-event', lambda.arn, '0 9,14 ? * MON-FRI *')
}

export default program
