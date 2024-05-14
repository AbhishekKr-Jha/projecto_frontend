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
        },
        deleteUserProjects(state,action){
state.userProjects=state.userProjects.filter(item=>item._id!==action.payload)
        } 
    }
})

export const {getProjectRerun,storeUserProjects,deleteUserProjects}=projectSlice.actions
export default  projectSlice.reducer