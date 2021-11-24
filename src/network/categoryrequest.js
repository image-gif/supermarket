import {request} from './request.js'

// 先获取category ,里面包含有一直信息
export function getCategory() {
  return request({
    url: '/category'
  }).catch(err => err)
}

export function getCategoryInfo(maitKey) {
  return request({
    url: '/subcategory?maitKey='+maitKey
  })
}

export function getDetailCategoryInfo(miniWallkey, type) {
  return request({
    url: '/subcategory/detail?miniWallkey='+miniWallkey+'&type='+ type
  })
}