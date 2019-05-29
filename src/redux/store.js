import {createStore, combineReducers, applyMiddleware} from 'redux'
import budgetReducer from './reducers/budgetReducer'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './reducers/userReducer'

const rootReducer= combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))