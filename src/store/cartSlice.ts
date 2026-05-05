import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../types'

interface CartItem extends MenuItem {
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<MenuItem>) {
      const existing = state.items.find((item) => item.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart(state) {
      state.items = []
    },
    openCart(state) {
      state.isOpen = true
    },
    closeCart(state) {
      state.isOpen = false
    },
  },
})

export const {
  addItem,
  removeItem,
  clearCart,
  openCart,
  closeCart,
} = cartSlice.actions

export const adicionarItem = addItem
export const removerItem = removeItem
export const limparCarrinho = clearCart
export const abrirCarrinho = openCart
export const fecharCarrinho = closeCart

export default cartSlice.reducer
