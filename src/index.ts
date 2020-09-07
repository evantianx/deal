import { DealRequestConfig } from './types'
import xhr from './xhr'

const deal = (config: DealRequestConfig): void => {
  xhr(config)
}

export default deal
