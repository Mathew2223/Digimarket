'use client'

import Link from 'next/link'
import { Star, ShoppingCart, Check } from 'lucide-react'
import { useCartStore } from '@/store/useStore'
import type Product from '@/types/product'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <Link href={`/products/${product.id}`} className="block group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-48 gradient-card p-6">
        <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
          {product.category}
        </span>
        <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
          <span className="text-white/50 text-6xl">📦</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-lg mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">by {product.author}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm font-medium text-gray-700 ml-1">
              {product.rating}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-purple-600">
              ${product.price}
            </span>
            <button
              onClick={handleAddToCart}
              className={`${
                isAdded
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white p-2.5 rounded-lg transition-all hover:shadow-lg`}
              aria-label="Add to cart"
            >
              {isAdded ? (
                <Check className="w-5 h-5" />
              ) : (
                <ShoppingCart className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}