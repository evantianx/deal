import { DealRequestConfig } from './types'

const xhr = (config: DealRequestConfig) => {
  const { url, data = null, method = 'GET', async = true } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, async)

  request.send(data)
}

export default xhr
