import {request} from '@/network/request.js'

export function getMultiData() {
  return request({
    url: 'home/multidata'
  })
}