import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productsAddedToCart: 0,
   totalPrice: 0,
   showMessgae: false,
   cartItems: []
}

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addProductToCart: (state, actions) => {
         state.productsAddedToCart += 1;
         state.cartItems.push(actions.payload);
         state.totalPrice += actions.payload.price;
      },
      showMessage: (state) => {
         state.showMessgae = true
      },
      hideMessage: (state) => {
         state.showMessgae = false
      },
      clearCart: (state) => {
         if (state.cartItems.length !== 0) {
            state.productsAddedToCart = 0;
            state.totalPrice = 0;
            state.cartItems = []
         }
      },
      quantityCounter: (state, action) => {
         const selectedProduct = state.cartItems.find((cartItem) => cartItem.id == action.payload.id);
         switch (action.payload.type) {
           case "increase":
             selectedProduct.quantity += 1;
             state.totalPrice += selectedProduct.price;
             break;
           case "decrease":
             if (selectedProduct.quantity > 1) {
               selectedProduct.quantity -= 1;
               state.totalPrice -= selectedProduct.price;
            }
             break;
         }
      },       
      removeProductCart: (state, action) => {
         const filteredProducts = state.cartItems.filter(cartItem => cartItem.id !== action.payload)
         state.cartItems = filteredProducts
         state.totalPrice = 0;
         filteredProducts.map(filteredProduct => {
            state.totalPrice += filteredProduct.price*filteredProduct.quantity
         })
         state.productsAddedToCart -= 1
      }
   }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer