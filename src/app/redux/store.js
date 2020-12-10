import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import saga from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [thunk, sagaMiddleware];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(...saga)

export default store


