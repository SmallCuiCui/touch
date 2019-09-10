import request from '@/utils/axios'

export function queryImages() {
  return request({
    method: 'get',
    url: `/scenic-touch/mediaConcern/queryPicAndCnId`
  })
}
