import {createSlice} from '@reduxjs/toolkit'

const deleteSlice=createSlice({
    name:"delete-project",
    initialState:{
        isDelete:false
    },
    reducers :{
        project_deleted(state){state.isDelete=false},
        delete_project_state(state){state.isDelete=true}
    }
})

export const {delete_project_state,project_deleted}=deleteSlice.actions
export default  deleteSlice.reducer