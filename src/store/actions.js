import {ADD_CART , ADD_TO_CART} from './mutations-types'

export default {
  [ADD_CART](context, payload) {
    return new Promise((resolve, reject) =>{
      let oldProduct = context.state.cartList.find(item => item.id === payload.id)
    if (oldProduct) {
      context.commit('add', oldProduct)
      resolve('商品+1')
    } else {
      // 这里的 .count 和 .checked 直接向 payload 中添加了这两个元素
      payload.count = 1
      
      context.commit(ADD_TO_CART, payload)
      resolve('添加新商品')
    }
    })
      
  }
}