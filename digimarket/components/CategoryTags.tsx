// components/CategoryTags.tsx
import Link from 'next/link'
import { categories } from '@/data/categories'

export function CategoryTags() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="px-6 py-3 bg-gray-100 hover:bg-purple-50 hover:border-purple-300 border-2 border-transparent rounded-full font-medium text-gray-700 hover:text-purple-700 transition-all"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}