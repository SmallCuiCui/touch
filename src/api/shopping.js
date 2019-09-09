import request from '@/utils/axios'

export function queryLeatureList() {
  return request({
    method: 'get',
    url: `/scenic-touch/activity/queryActivityContent`
  })
}
