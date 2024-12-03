import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState: {
    blogItems: []
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses Immer
      state.blogItems.push(action.payload);
      console.log(action.payload);
    },
    removeItem: (state) => {
      state.blogItems.pop();
    },
    clearCart: (state) => {
      state.blogItems.length = 0;
    }
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;