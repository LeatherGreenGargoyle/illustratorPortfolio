import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
// import thunk from 'redux-thunk'

export default () => {
  const plugins = []

  if (process.env.NODE_ENV !== 'production') {
    plugins.push(createLogger({}))
  }

  const middleware = applyMiddleware(...plugins)
  const store = createStore(rootReducer, middleware)
  store.subscribe(() => console.log(store.getState()))

  return store
}
