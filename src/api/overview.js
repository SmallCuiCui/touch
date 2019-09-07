import request from '@/utils/axios'

export function queryOverviewList() {
  return request({
    method: 'get',
    url: `/scenic-touch/mediaConcern/queryPicAndCnId`
  })
}

export function queryOverviewDetai(options) {
  return request({
    url: `/scenic-touch/mediaConcern/queryItemMediaConcernContent?id=${options.id}`,
    method: 'post'
  })
}
