import { ProductCard } from './ProductCard'
import type Product from '@/types/product'

interface ProductGridProps {
  products: Product[]
  title: string
}

export function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <a href="/catalog" className="text-purple-600 font-medium hover:text-purple-700">
            See all →
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}