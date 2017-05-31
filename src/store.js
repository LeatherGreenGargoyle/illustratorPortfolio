import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default rootReducer => {
  const plugins = [
    logger(),
    thunk,
  ]

  const middleware = applyMiddleware(...plugins)
  const store = createStore(rootReducer, middleware)

  return store
}
