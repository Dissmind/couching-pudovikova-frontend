import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Program/index.reducer.js'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})
