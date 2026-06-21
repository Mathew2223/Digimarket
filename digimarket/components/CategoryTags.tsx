import Link from 'next/link'

const categories = [
    { name: 'UI Kits', slug: 'ui-kits' },
    { name: 'Templates', slug: 'templates' },
    { name: 'Icons', slug: 'icons' },
    { name: 'Code', slug: 'code' },
    { name: 'Fonts', slug: 'fonts' },
    { name: 'Components', slug: 'components' },
    { name: 'Illustrations', slug: 'illustrations' },
]

export function CategoryTags() {
    return (
        <div className="py-12 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/categories/${cat.slug}`}
                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors font-medium"
                        >
                            {cat.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}