'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function CategorySwitcher() {
    const pathname = usePathname()
    const router = useRouter()
    
    const currentSlug = pathname.split('/categories/')[1]?.split('?')[0] || 'ui-kits'
    const [selectedSlug, setSelectedSlug] = useState(currentSlug)

    const handleNavigate = () => {
        const url = `/categories/${selectedSlug}`
        
        console.log('🚀 Переход:', url)
        router.push(url)
    }

    const categories = [
        { slug: 'ui-kits', name: '📦 UI Kits' },
        { slug: 'templates', name: '📄 Templates' },
        { slug: 'icons', name: '🎨 Icons' },
        { slug: 'code', name: '💻 Code' },
        { slug: 'fonts', name: '🔤 Fonts' },
        { slug: 'components', name: '🧩 Components' },
        { slug: 'illustrations', name: '🖼️ Illustrations' },
    ]

    return (
        <div className="flex gap-2 items-center">
            <div className="relative">
                <select
                    value={selectedSlug}
                    onChange={(e) => setSelectedSlug(e.target.value)}
                    className="appearance-none bg-gradient-to-r from-purple-50 to-white border-2 border-purple-200 rounded-xl px-5 py-2.5 pr-12 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 
                               font-semibold text-gray-800 cursor-pointer 
                               hover:border-purple-400 hover:shadow-md 
                               transition-all duration-200
                               min-w-[180px]"
                >
                    {categories.map((cat) => (
                        <option key={cat.slug} value={cat.slug}>
                            {cat.name}
                        </option>
                    ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            
            <button
                onClick={handleNavigate}
                className="bg-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold 
                           hover:bg-purple-700 hover:shadow-lg 
                           transition-all duration-200 whitespace-nowrap"
            >
                Change category
            </button>
        </div>
    )
}