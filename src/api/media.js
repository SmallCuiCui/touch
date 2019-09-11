import request from '@/utils/axios'

export function queryImages(options) {
  return request({
    method: 'post',
    url: `/scenic-touch/picture/findAll`,
    data: options
  })
}

export function queryVideos() {
  return request({
    method: 'post',
    url: `/scenic-touch/video/findAll`,
    data: {
      cnSceneryId: 16
    }
  })
}

