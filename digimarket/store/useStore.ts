import { create } from 'zustand'
import type Product from '@/types/product'

type CartState = {
    items: Product[]
    addItem: (product: Product) => void
    removeItem: (id: string) => void
    clearItem: () => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (product) => set((state) => ({
        items: [...state.items, product]
    })),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id)
    })),

    clearItem: () => set(({ items: [] }))
}))