import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    open(state) {
      state.isOpen = true
    },

    close(state) {
      state.isOpen = false
    },

    add(state, action) {
      state.items.push(action.payload)
      state.isOpen = true
    },

    remove(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    }
  }
})

export const { open, close, add, remove } = cartSlice.actions

export default cartSlice.reducer