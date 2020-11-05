import * as awsx from '@pulumi/awsx'
import { APIConfig } from './types'

const api = (config: APIConfig) => {
  const { path, method, eventHandler, name, stageName } = config
  return new awsx.apigateway.API(name, {
    stageName: stageName || 'stage',
    routes: [
      {
        path: path || '/',
        method: method || 'GET',
        eventHandler,
      },
    ],
  })
}

export default api
