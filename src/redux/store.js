import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './reducer'
//import other from './otherReducer'

// const rootReducer = combineReducers({
//     reducer,
//     other
// })

export default createStore(reducer, applyMiddleware(promiseMiddleware))