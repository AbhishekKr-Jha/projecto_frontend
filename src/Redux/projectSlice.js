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
        } ,
        updateUserProjects(state,action){
            const data=action.payload
           state.userProjects=state.userProjects.map((item)=>{
            if(item._id===data._id){
                return data
            }
            else{return item}
           })
        }
    }
})

export const {getProjectRerun,storeUserProjects,deleteUserProjects, updateUserProjects}=projectSlice.actions
export default  projectSlice.reducer