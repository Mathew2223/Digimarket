'use client'

import Link from 'next/link'
import { ShoppingCart, Package } from 'lucide-react'
import { useCartStore } from '@/store/useStore'

export function Header() {
    const { items } = useCartStore()

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Package className="w-8 h-8 text-purple-600" />
                        <span className="text-xl font-bold text-gray-900">DigiMarket</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link href="/auth/signin" className="text-gray-700 hover:text-purple-600 font-medium">
                            Sign in
                        </Link>
                        <Link
                            href="/sell"
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                        >
                            Sell
                        </Link>
                        <Link href="/cart" className="relative p-2 hover:bg-gray-50 rounded-lg">
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {items.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}