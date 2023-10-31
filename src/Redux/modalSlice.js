import {createSlice} from '@reduxjs/toolkit'

const modalSlice=createSlice({
    name:"modal",
    initialState:{
        isOpen:false
    },
    reducers :{
        modal_open(state){state.isOpen=true},
        modal_close(state){state.isOpen=false},
    }
})

export const {modal_open,modal_close}=modalSlice.actions
export default  modalSlice.reducer