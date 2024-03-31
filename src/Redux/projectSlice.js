import {createSlice} from '@reduxjs/toolkit'

const projectSlice=createSlice({
    name:"project",
    initialState:{
        isGetProjectRerun:false,
        userProjects:[]
    },
    reducers :{
        getProjectRerun(state){state.isGetProjectRerun=state.isGetProjectRerun?"false":"true"},
   
        storeUserProjects(state,action){
            state.userProjects=action.payload
        }
    }
})

export const {getProjectRerun,storeUserProjects}=projectSlice.actions
export default  projectSlice.reducer