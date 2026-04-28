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
    adicionarItem(state, action: PayloadAction<MenuItem>) {
      const existing = state.items.find((i) => i.id === action.payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removerItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    limparCarrinho(state) {
      state.items = []
    },
    abrirCarrinho(state) {
      state.isOpen = true
    },
    fecharCarrinho(state) {
      state.isOpen = false
    },
  },
})

export const {
  adicionarItem,
  removerItem,
  limparCarrinho,
  abrirCarrinho,
  fecharCarrinho,
} = cartSlice.actions

export default cartSlice.reducer
