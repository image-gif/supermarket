//
import { ADD , ADD_TO_CART} from './mutations-types'
export default {
  [ADD](state, payload) {
    payload.count++
  },

  [ADD_TO_CART](state, payload) {
    payload.checked = false
    state.cartList.push(payload)
  }
}