import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

export default rootReducer => {
  const plugins = [
    logger(),
  ]

  const middleware = applyMiddleware(...plugins)
  const store = createStore(rootReducer, middleware)

  return store
}
