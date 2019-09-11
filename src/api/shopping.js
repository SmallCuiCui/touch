import request from '@/utils/axios'

export function queryLeatureList(options) {
  return request({
    method: 'post',
    url: `/scenic-touch/sceneryEatLiveTravel/queryEatLiveTravelByCode`,
    data: options
  })
}

export function queryDetailById(options) {
  return request({
    method: 'post',
    url: `/scenic-touch/sceneryEatLiveTravel/queryEatLiveTravelById`,
    data: options
  })
}
