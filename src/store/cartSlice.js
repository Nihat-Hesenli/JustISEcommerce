import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] ,
        isOpen: false,
    },
    reducers: {
        addToCart: (state, action) => {
           const item = state.cart.find(item=> item.id === action.payload.id);
           if(item){
            item.quantity++;
           }else {
            state.cart.push({...action.payload,quantity:1})
           }
           state.isOpen = true;
        
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        plusQuantity: (state, action) => {
           const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                item.quantity++;
            }
        },
        minusQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;

            }
        },
        
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;



        },
        sortProducts:(state,{payload}) => {
            if(payload === "low"){
                state.cart.sort((a,b) => a.price - b.price)
            }
            if(payload === "high"){
                state.cart.sort((a,b) => b.price - a.price);

             
               

            }


        }
}

})
export default cartSlice.reducer;
export const { addToCart, deleteFromCart, plusQuantity, minusQuantity, toggleCart,sortProducts } = cartSlice.actions;