import request from '@/utils/request'

export function diagnostics(data) {
  return request({
    url: '/api/v1/diagnostics',
    method: 'post',
    data
  })
}
