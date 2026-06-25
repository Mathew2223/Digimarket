'use client'

import Link from 'next/link'
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/store/useStore'

export default function CartPage() {
    const { items, removeItem, updateQuantity } = useCartStore()

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax = subtotal * 0.1
    const total = subtotal + tax

    if (items.length === 0) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center py-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-purple-100 rounded-full mb-6">
                        <ShoppingBag className="w-12 h-12 text-purple-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Your cart is empty
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Looks like you haven't added anything yet
                    </p>
                    <Link
                        href="/categories/ui-kits"
                        className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Browse catalog
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
                <p className="text-gray-600">
                    {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                        >
                            <div className="w-24 h-24 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <Link
                                        href={`/products/${item.id}`}
                                        className="font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                    <p className="text-sm text-gray-600 mt-1">
                                        by {item.author}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {item.category}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-2">

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-8 text-center font-medium">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-lg font-bold text-gray-900">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                        {item.quantity > 1 && (
                                            <p className="text-xs text-gray-500">
                                                ${item.price.toFixed(2)} each
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Remove item"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="lg:w-96">
                    <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Tax (10%)</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="border-t border-gray-200 pt-3">
                                <div className="flex justify-between text-lg font-bold text-gray-900">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/checkout"
                            className="block w-full bg-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
                        >
                            Proceed to Checkout
                        </Link>

                        <Link
                            href="/catalog"
                            className="block w-full text-center text-purple-600 hover:underline mt-4 font-medium"
                        >
                            Continue Shopping
                        </Link>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span>Secure checkout</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                <span>Instant digital delivery</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}