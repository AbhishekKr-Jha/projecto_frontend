import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import deleteSlice from './deleteSlice'
import projectSlice from './projectSlice'

const reduxStore=configureStore({
reducer:{
    login:loginSlice,
    delete:deleteSlice,
    project:projectSlice
}
})
    
export default reduxStore