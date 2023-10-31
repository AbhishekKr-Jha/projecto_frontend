import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import updateSlice from './updateSlice'
import deleteSlice from './deleteSlice'
import modalSlice from './modalSlice'

const reduxStore=configureStore({
reducer:{
    login:loginSlice,
    update:updateSlice,
    delete:deleteSlice,
    modal:modalSlice,
}
})
    
export default reduxStore