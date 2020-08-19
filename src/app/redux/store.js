import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
// import {} from 'redux-devtools';
import saga from './sagas'
import reducers from './reducers'
import { combineReducers } from 'redux'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(...saga)

console.log(store.getState())

function existingSliceReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_USER': {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
function newSliceReducer(state = {}, action) {
  switch (action.type) {
    case 'GET_TODO': {
      return {
        ...state
      }
    }
    default:
      return state
  }
}
const newRootReducer = combineReducers({
  existingSlice: existingSliceReducer,
  newSlice: newSliceReducer
})

// store.replaceReducer(newRootReducer)
// console.log(store.getState())


export default store


