import {createStore} from 'redux'
import apiReducer from './apiReducer'

const store = createStore(apiReducer)

export default store