import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
} from '../constants/orderConstants'
import { USER_LOGOUT } from '../constants/userConstants'
import { PRODUCT_LIST_REQUEST } from '../constants/productConstants'
import { CART_ADD_ITEM } from '../constants/cartConstants'

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      }
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      }
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return {}
    case PRODUCT_LIST_REQUEST:
      return {}
    case CART_ADD_ITEM:
      return {}
    default:
      return state
  }
}
