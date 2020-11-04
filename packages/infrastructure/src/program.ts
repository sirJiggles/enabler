import * as dotenv from 'dotenv'
import botLambda from './lambda'

const program = () => {
  // get the right AWS env profile
  dotenv.config()

  // create the lambda for the bot
  const lambda = botLambda()

  // then make the API gateway end point to host it

  return lambda.name
}

export default program
