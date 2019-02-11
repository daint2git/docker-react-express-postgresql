import { compose, applyMiddleware, createStore } from 'redux'
import stepsMiddleware from 'redux-effects-steps'
import ReduxEmitter from 'kuker-emitters/lib/ReduxEmitter'

import productReducer from './productReducer'

const appStore = (initalState = {}) => {
  const middlewares = [stepsMiddleware, ReduxEmitter()]
  const enhancer = compose(applyMiddleware(...middlewares))
  const store = createStore(productReducer, initalState, enhancer)

  return store
}

export default appStore
