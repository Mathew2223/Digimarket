import { UIKits } from '@/data/products/uikits';
import type { Metadata } from 'next';
import type Product from '@/types/product'
import { templates } from '@/data/products/templates';
import { icons } from '@/data/products/icons';
import { code } from '@/data/products/code';
import { fonts } from '@/data/products/fonts';
import { components } from '@/data/products/components';
import { illustrations } from '@/data/products/illustrations';
import { ProductCard } from '@/components/ProductCard';

export const metadata: Metadata = {
    title: 'Catalog | DigiMarket',
    description: 'Browse all digital assets',
}

const allProducts: Product[] = [
    ...UIKits,
    ...templates,
    ...icons,
    ...code,
    ...fonts,
    ...components,
    ...illustrations,
]

export default async function CatalogPage({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>
}) {
    const params = await searchParams
    const query = params.query?.toLowerCase() || '';

    const filteredProducts = query
    ? allProducts.filter(
        (p) =>
            p.title.toLowerCase().includes(query) ||
            p.author.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
      )
    : allProducts

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Catalog</h1>
                {query && (
                    <p className="text-lg text-gray-600">Search results for: <span className="font-semibold text-purple-600">"{query}"</span>
                        {' '}({filteredProducts.length} found)
                    </p>
                )}
                {!query && (
                    <p className="text-lg text-gray-600">
                        {allProducts.length} products available
                    </p>
                )}
            </div>

            {filteredProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16 text-gray-500">
                    <p className="text-xl">No products found for "{query}"</p>
                    <p className="mt-2">Try a different search term</p>
                </div>
            )}
        </div>
    )
}