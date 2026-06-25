import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ProductCard } from '@/components/ProductCard'
import { UIKits } from '@/data/products/uikits'
import { templates } from '@/data/products/templates'
import { icons } from '@/data/products/icons'
import { code } from '@/data/products/code'
import { fonts } from '@/data/products/fonts'
import { components } from '@/data/products/components'
import { illustrations } from '@/data/products/illustrations'
import type Product from '@/types/product'
import { CategorySwitcher } from '@/components/CategorySwitcher'

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
    searchParams: Promise<{
        query?: string
        minPrice?: string
        maxPrice?: string
        rating?: string
        sort?: string
    }>
}) {
    const { slug } = await params
    const search = await searchParams

    const query = search.query?.trim() ? search.query.toLowerCase() : ''
    const minPrice = search.minPrice && !isNaN(Number(search.minPrice)) && Number(search.minPrice) > 0
        ? Number(search.minPrice) 
        : 0
    const maxPrice = search.maxPrice && !isNaN(Number(search.maxPrice)) && Number(search.maxPrice) > 0
        ? Number(search.maxPrice) 
        : Infinity
    const minRating = search.rating && !isNaN(Number(search.rating)) && Number(search.rating) > 0
        ? Number(search.rating) 
        : 0
    const sort = search.sort && search.sort !== 'default' ? search.sort : 'default'

    const category = categoriesData[slug]

    if (!category) {
        notFound()
    }

    let filteredProducts = category.products.filter((p) => {
        const matchesQuery =
            !query ||
            p.title.toLowerCase().includes(query) ||
            p.author.toLowerCase().includes(query)
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice
        const matchesRating = p.rating >= minRating
        return matchesQuery && matchesPrice && matchesRating
    })

    switch (sort) {
        case 'price-asc':
            filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price)
            break
        case 'price-desc':
            filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price)
            break
        case 'rating':
            filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating)
            break
        case 'name':
            filteredProducts = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title))
            break
    }

    const buildFilterUrl = (newParams: Record<string, string | null>) => {
        const params = new URLSearchParams()
        if (query) params.set('query', query)
        if (minPrice > 0) params.set('minPrice', String(minPrice))
        if (maxPrice < Infinity) params.set('maxPrice', String(maxPrice))
        if (minRating > 0) params.set('rating', String(minRating))
        if (sort !== 'default') params.set('sort', sort)

        Object.entries(newParams).forEach(([key, value]) => {
            if (value === null || value === '' || value === '0' || value === 'default') {
                params.delete(key)
            } else {
                params.set(key, value)
            }
        })

        const queryString = params.toString()
        return `/categories/${slug}${queryString ? `?${queryString}` : ''}`
    }

    const hasActiveFilters = query || minPrice > 0 || maxPrice < Infinity || minRating > 0 || sort !== 'default'

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Заголовок + Dropdown в одной строке */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {category.title}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {category.description}
                    </p>
                </div>
                
                <CategorySwitcher />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8">
                <aside className="lg:w-64 shrink-0">
                    <form action={`/categories/${slug}`} method="GET" className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                            {hasActiveFilters && (
                                <Link
                                    href={`/categories/${slug}`}
                                    className="text-sm text-purple-600 hover:underline"
                                >
                                    Reset
                                </Link>
                            )}
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Search
                            </label>
                            <input
                                type="text"
                                name="query"
                                defaultValue={query || ''}
                                placeholder="Search..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                            />
                            {minPrice > 0 && <input type="hidden" name="minPrice" value={minPrice} />}
                            {maxPrice < Infinity && maxPrice > 0 && <input type="hidden" name="maxPrice" value={maxPrice} />}
                            {minRating > 0 && <input type="hidden" name="rating" value={minRating} />}
                            {sort !== 'default' && <input type="hidden" name="sort" value={sort} />}
                        </div>
                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Price</h3>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    name="minPrice"
                                    defaultValue={minPrice > 0 ? minPrice : ''}
                                    placeholder="Min"
                                    min="0"
                                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                                <input
                                    type="number"
                                    name="maxPrice"
                                    defaultValue={maxPrice < Infinity ? maxPrice : ''}
                                    placeholder="Max"
                                    min="0"
                                    className="w-full px-2 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Rating</h3>
                            <div className="space-y-2">
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label
                                        key={rating}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                                            minRating === rating
                                                ? 'bg-gray-200 text-purple-700 ring-2 ring-purple-400'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="rating"
                                            value={rating}
                                            defaultChecked={minRating === rating}
                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                        />
                                        <span className="text-yellow-500">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
                                        {minRating === rating && (
                                            <span className="ml-auto text-xs font-medium text-purple-700">✓</span>
                                        )}
                                    </label>
                                ))}
                                {minRating > 0 && (
                                    <Link
                                        href={buildFilterUrl({ rating: null })}
                                        className="block text-center text-sm text-purple-600 hover:underline mt-2"
                                    >
                                        Clear rating
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Sort by</h3>
                            <div className="space-y-2">
                                {[
                                    { value: 'default', label: 'Default' },
                                    { value: 'price-asc', label: 'Price: Low to High' },
                                    { value: 'price-desc', label: 'Price: High to Low' },
                                    { value: 'rating', label: 'Top Rated' },
                                    { value: 'name', label: 'Name: A-Z' },
                                ].map((option) => (
                                    <label
                                        key={option.value}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm ${
                                            sort === option.value
                                                ? 'bg-gray-200 text-purple-700 font-medium ring-2 ring-purple-400'
                                                : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            name="sort"
                                            value={option.value}
                                            defaultChecked={sort === option.value}
                                            className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                                        />
                                        {option.label}
                                        {sort === option.value && (
                                            <span className="ml-auto text-xs text-purple-700">✓</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                        >
                            Filter
                        </button>
                    </form>
                </aside>

                <div className="flex-1">
                    <div className="flex items-center justify-between mb-6">
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-900">{filteredProducts.length}</span>{' '}
                            products found
                        </p>
                        {hasActiveFilters && (
                            <div className="flex flex-wrap gap-2">
                                {query && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        Search: "{query}"
                                        <Link href={buildFilterUrl({ query: null })} className="hover:text-purple-900">
                                            ×
                                        </Link>
                                    </span>
                                )}
                                {(minPrice > 0 || maxPrice < Infinity) && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        ${minPrice} - ${maxPrice === Infinity ? '∞' : maxPrice}
                                        <Link
                                            href={buildFilterUrl({ minPrice: null, maxPrice: null })}
                                            className="hover:text-purple-900"
                                        >
                                            ×
                                        </Link>
                                    </span>
                                )}
                                {minRating > 0 && (
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                                        {'★'.repeat(minRating)}
                                        <Link href={buildFilterUrl({ rating: null })} className="hover:text-purple-900">
                                            ×
                                        </Link>
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-gray-500 bg-gray-50 rounded-xl">
                            <p className="text-xl">No products found</p>
                            <p className="mt-2">Try adjusting your filters</p>
                            <Link
                                href={`/categories/${slug}`}
                                className="inline-block mt-4 text-purple-600 hover:underline"
                            >
                                Reset all filters
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}