import {createSlice} from '@reduxjs/toolkit'

const updateSlice=createSlice({
    name:"update",
    initialState:{
        isUpdate:false
    },
    reducers :{
        update_project(state){state.isUpdate=true},
        project_updated(state){state.isUpdate=false}
    }
})

export const {update_project,project_updated}=updateSlice.actions
export default  updateSlice.reducer