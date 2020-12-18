import {combineReducers} from 'redux'
import cardReducer from './reducers/cardReducer.js'


export default combineReducers({
    card: cardReducer
})
