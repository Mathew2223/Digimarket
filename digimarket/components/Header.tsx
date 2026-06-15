'use client'

import Link from 'next/link'
import { ShoppingCart, Search, Package } from 'lucide-react'
import { useCartStore } from '@/store/useStore'

export function Header() {
  const { items } = useCartStore();
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Package className="w-8 h-8 text-purple-600" />
            <span className="text-xl font-bold text-gray-900">DigiMarket</span>
          </Link>
          
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-black-700 hover:text-purple-600 font-medium">
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
        
        {/* Навигация */}
        <nav className="flex items-center justify-center gap-8 pb-4">
          <Link href="/catalog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Catalog
          </Link>
          <Link href="/categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Categories
          </Link>
          <Link href="/authors" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Authors
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  )
}