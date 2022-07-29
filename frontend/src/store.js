import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducers.js'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  productList: productListReducer,
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
