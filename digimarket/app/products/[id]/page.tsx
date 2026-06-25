import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Star, ShoppingCart, ArrowLeft, Download, Shield, Zap } from 'lucide-react'
import { UIKits } from '@/data/products/uikits'
import { templates } from '@/data/products/templates'
import { icons } from '@/data/products/icons'
import { code } from '@/data/products/code'
import { fonts } from '@/data/products/fonts'
import { components } from '@/data/products/components'
import { illustrations } from '@/data/products/illustrations'
import type Product from '@/types/product'

const allProducts: Product[] = [
    ...UIKits,
    ...templates,
    ...icons,
    ...code,
    ...fonts,
    ...components,
    ...illustrations,
]

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id } = await params
    const product = allProducts.find((p) => p.id === id)

    if (!product) {
        return { title: 'Product not found' }
    }

    return {
        title: `${product.title} | DigiMarket`,
        description: `${product.description || product.title} by ${product.author}`,
    }
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const product = allProducts.find((p) => p.id === id)

    if (!product) {
        notFound()
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Link
                href="/categories/ui-kits"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-8 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                Back to catalog
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="relative h-96 gradient-card rounded-2xl p-8">
                    <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                        <span className="text-white/50 text-9xl">📦</span>
                    </div>
                </div>

                <div>
                    <div className="mb-2">
                        <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                            {product.category}
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        {product.title}
                    </h1>

                    <p className="text-lg text-gray-600 mb-4">
                        by <span className="font-semibold text-gray-900">{product.author}</span>
                    </p>

                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-5 h-5 ${
                                        i < Math.floor(product.rating)
                                            ? 'text-amber-400 fill-amber-400'
                                            : 'text-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-gray-600">
                            ({product.rating} out of 5)
                        </span>
                    </div>

                    <div className="text-4xl font-bold text-purple-600 mb-8">
                        ${product.price}
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <Download className="w-5 h-5 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Instant Download</h3>
                                <p className="text-gray-600 text-sm">Get your files immediately after purchase</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Shield className="w-5 h-5 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Secure Payment</h3>
                                <p className="text-gray-600 text-sm">100% secure checkout</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Zap className="w-5 h-5 text-purple-600 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900">Lifetime Updates</h3>
                                <p className="text-gray-600 text-sm">Free updates forever</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                        <ShoppingCart className="w-6 h-6" />
                        <Link
                            href='/cart'
                        >
                            Add to Cart
                        </Link>
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        30-day money-back guarantee
                    </p>
                </div>
            </div>
        </div>
    )
}