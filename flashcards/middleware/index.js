import thunk from 'redux-thunk'

import { applyMiddleware } from 'redux'

export const logger = (store) => (next) => (action) => { //does this work with my dev environment?
  console.group(action.type)
    console.log('The action: ', action)
    const returnValue = next(action)
    console.log('The new state: ', store.getState())
  console.groupEnd()
  return returnValue
}


export default applyMiddleware(
  thunk,
  logger,
)
