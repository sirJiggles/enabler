import * as dotenv from 'dotenv'
import api from './api'
import botLambda from './lambda'

const program = () => {
  // get the right AWS env profile
  dotenv.config()

  // create the lambda for the bot
  const lambda = botLambda()

  // then make the API gateway end point to host it
  const gatewayEndPoint = api({
    name: 'enabler-bot',
    eventHandler: lambda,
    stageName: 'enabler',
  })

  // what we can hit to run our little bot lambda
  return gatewayEndPoint.url
}

export default program
