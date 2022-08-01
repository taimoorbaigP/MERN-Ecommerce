import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDetailsReducer,
} from './reducers/productReducers.js'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  initialState,
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(
      {
        serializableCheck: {
          immutableCheck: false,
          serializableCheck: false,
        },
      },
      composeWithDevTools(applyMiddleware(...middleware))
    ),
})

export default store
