import request from '@/utils/axios'

export function queryPosition(options) {
  return request({
    method: 'get',
    url: `/scenic-touch/scenenryMapPosition/queryMapPosition?title=${options.title}`
  })
}
