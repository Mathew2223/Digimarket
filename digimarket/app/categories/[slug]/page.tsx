import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductCard } from '@/components/ProductCard'
import { UIKits } from '@/data/products/uikits'
import { templates } from '@/data/products/templates'
import { icons } from '@/data/products/icons'
import { code } from '@/data/products/code'
import { fonts } from '@/data/products/fonts'
import { components } from '@/data/products/components'
import { illustrations } from '@/data/products/illustrations'
import type Product from '@/types/product'

const categoriesData: Record<string, { products: Product[]; title: string; description: string }> = {
    'ui-kits': { products: UIKits, title: 'UI Kits', description: 'Premium UI kits for modern web applications' },
    'templates': { products: templates, title: 'Templates', description: 'Ready-to-use templates for any project' },
    'icons': { products: icons, title: 'Icons', description: 'Beautiful icon packs for your designs' },
    'code': { products: code, title: 'Code', description: 'High-quality code snippets and components' },
    'fonts': { products: fonts, title: 'Fonts', description: 'Professional fonts for any project' },
    'components': { products: components, title: 'Components', description: 'Reusable UI components' },
    'illustrations': { products: illustrations, title: 'Illustrations', description: 'Stunning illustrations for your designs' },
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params
    const category = categoriesData[slug]

    if (!category) {
        return { title: 'Category not found' }
    }

    return {
        title: `${category.title} | DigiMarket`,
        description: category.description,
    }
}

export function generateStaticParams() {
    return Object.keys(categoriesData).map((slug) => ({ slug }))
}

export default async function CategoryPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ query?: string }>
}) {
    const { slug } = await params
    const search = await searchParams
    const query = search.query?.toLowerCase() || ''
    
    const category = categoriesData[slug]

    if (!category) {
        notFound()
    }

    // Фильтруем товары внутри категории
    const filteredProducts = query
        ? category.products.filter(
              (p) =>
                  p.title.toLowerCase().includes(query) ||
                  p.author.toLowerCase().includes(query)
          )
        : category.products

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {category.title}
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                    {category.description}
                </p>
                
                {/* Поисковая строка */}
                <form className="max-w-md">
                    <div className="relative">
                        <input
                            type="text"
                            name="query"
                            defaultValue={query}
                            placeholder={`Search in ${category.title}...`}
                            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>
                </form>

                {query && (
                    <p className="text-sm text-gray-600 mt-2">
                        Found {filteredProducts.length} results for "{query}"
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