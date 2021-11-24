import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装vuex
Vue.use(Vuex)

// 创建store 实例
const store = new Vuex.Store({
  state: {
    // 商品数组
    cartList: []
  },
  // vuex重构
  mutations,
  actions,
  getters,


  // mutations: {
    // addToCart(state, payload) {
      // state.cartList.push(payload)
      // 添加商品
      // let oldProduct = state.cartList.find(item => item.id === payload.id)
      // console.log(payload);

    //   if (oldProduct) {
    //     // console.log(oldProduct.count);
    //     // console.log(oldProduct);
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }

    // add(state, payload) {
    //   payload.count++
    // },

    // addtocart(state, payload) {
    //   state.cartList.push(payload)
    // }
    
  // },
  

  // actions: {
    // addToCart(context, payload) {
    //   let oldProduct = context.state.cartList.find(item => item.id === payload.id)
    //   if (oldProduct) {
    //     context.commit('add', oldProduct)
    //   } else {
    //     payload.count = 1
    //     context.commit('addtocart', payload)
    //   }
        
  //   // }
  // }
})

// 挂载到vue实例上
export default store