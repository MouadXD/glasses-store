import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/Cart";
import productsSlice from "./features/Product"

const store = configureStore({
   reducer: {
      cart: cartSlice,
      product: productsSlice
   }
})

export default store