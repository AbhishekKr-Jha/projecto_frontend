import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'

const reduxStore=configureStore({
reducer:{
    login:loginSlice
}
})
    
export default reduxStore