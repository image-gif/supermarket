import {request} from '@/network/request.js'

export function getMultiData() {
  return request({
    url: 'home/multidata'
  })
}


export function getGoodsInfo(type,page) {
  return request({
    url: 'home/data?type'+'='+type+'&page='+page,
    param: {
      type,
      page
    }
  })
}