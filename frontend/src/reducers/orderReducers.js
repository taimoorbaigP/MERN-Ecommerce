import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstants'

export const orderCreateReducer = (
  state = { order: null, success: false },
  action
) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
        success: false,
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
        success: false,
      }

    default:
      return state
  }
}
