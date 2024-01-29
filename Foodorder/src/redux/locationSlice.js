import { createSlice } from "@reduxjs/toolkit"
const locationSlice=createSlice({
        name:"location",
        initialState:{loc:'Hyderabad'},
        reducers:{
            enterLocation:(state,action)=>{
                state.loc=action.payload
            }
        }
})
export const {enterLocation}=locationSlice.actions
export default locationSlice.reducer