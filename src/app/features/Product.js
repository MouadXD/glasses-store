import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../helpers/productsData"

const initialState = {
   products: productsData,
   filteredProducts: [],
   messageType: ''
}

const productSlice = createSlice({
   name: "product",
   initialState,
   reducers: {
      filterProducts: (state, action) => {
         state.filteredProducts = action.payload
      },
      changeMessageType: (state, action) => {
         state.messageType = action.payload
      }
   }

})

export const productsActions = productSlice.actions
export default productSlice.reducer