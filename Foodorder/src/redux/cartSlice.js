import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
            const toRemove=state.items.filter(item=>item.id!==action.payload)
            state.items.splice(toRemove,1)
        },
        increaseQuantity:(state,action)=>{
            const{id}=action.payload
            const tobeupdated = state.items.filter(item => item.id === id);
            console.log(tobeupdated)
            if (tobeupdated) {
                tobeupdated.quantity+=1;
              }
        },
        decreaseQuantity:(state,action)=>{
            const{id}=action.payload
            const tobeupdated = state.items.find(item => item.id === id);
            if (tobeupdated) {
                tobeupdated.quantity-=1;
              }
        }
    }
})
export const {addItem,clearCart,removeItem,increaseQuantity,decreaseQuantity}=cartSlice.actions
export default cartSlice.reducer