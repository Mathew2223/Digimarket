import { Metadata } from 'next'
import { CategoryTags } from '@/components/CategoryTags'
import { ProductGrid } from '@/components/ProductGrid'
import { Hero } from '@/components/Hero'
import { mockProducts } from '@/data/mockProducts'
import { CtaBanner } from '@/components/CtaBanner'
import Navigation from '@/components/Navigations'

export const metadata: Metadata = {
    title: 'DigiMarket - Premium digital assets',
    description: 'Find the best digital assets for developers and designers',
};

export default async function ProductPage() {
    return (
        <div className="bg-linear-to-br from-purple-50 via-white to-pink-50">
            <Navigation />
            <Hero />
            <CategoryTags />
            <ProductGrid products={mockProducts} title="Trending this week" />
            <CtaBanner />
        </div>
    )
}