import { Metadata } from 'next'
import { ProductCard } from '@/components/ProductCard'
import type Product from '@/types/product';
import { mockProducts } from '@/data/mockProducts'

export const metadata: Metadata = {
    title: 'Product catalog | DigiMarket',
    description: 'Find the best digital assets',
};

export default async function ProductPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Product catalog</h1>
            <div className="grid md:grid-cols-3 gap-6">
                {mockProducts.map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}