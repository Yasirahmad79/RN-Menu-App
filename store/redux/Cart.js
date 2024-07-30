import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // array of cart items
    ids: []    // array of IDs for quick lookup
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.ids.push(newItem.id);
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
      state.ids = state.ids.filter(id => id !== idToRemove);
    },
    clearCart: (state) => {
      state.items = [];
      state.ids = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
