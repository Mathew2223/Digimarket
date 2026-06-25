import { create } from 'zustand'
import type Product from '@/types/product'

export type CartItem = Product & { quantity: number }

type CartState = {
    items: CartItem[]
    addItem: (product: Product) => void
    removeItem: (id: string) => void
    clearItem: () => void
    updateQuantity: (id: string, quantity: number) => void
}

export const useCartStore = create<CartState>((set) => ({
    items: [],

    addItem: (product) =>
        set((state) => {
            const existing = state.items.find((item) => item.id === product.id)
            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
            }
            return { items: [...state.items, { ...product, quantity: 1 }] }
        }),

    removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id)
    })),

    clearItem: () => set(({ items: [] })),

    updateQuantity: (id, quantity) =>
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        }))
}))