// components/Hero.tsx
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - текст */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">
                Premium digital assets
                <br />
                for developers and designers
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover thousands of high-quality UI kits, templates, icons, and more. 
              Created by professionals, for professionals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/catalog"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Browse catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/sell"
                className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-50 transition-all"
              >
                Start Selling
              </Link>
            </div>
          </div>
          
          {/* Правая часть - иллюстрация */}
          <div className="relative">
            <div className="relative z-10">
              {/* Абстрактная композиция */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl p-6 shadow-2xl transform -rotate-3">
                    <div className="bg-white/20 rounded-lg h-32"></div>
                  </div>
                  <div className="bg-linear-to-br from-purple-400 to-purple-600 rounded-2xl p-6 shadow-2xl transform rotate-2">
                    <div className="bg-white/20 rounded-lg h-24"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-linear-to-br from-orange-400 to-orange-600 rounded-2xl p-6 shadow-2xl transform rotate-3">
                    <div className="bg-white/20 rounded-lg h-24"></div>
                  </div>
                  <div className="bg-linear-to-br from-pink-400 to-pink-600 rounded-2xl p-6 shadow-2xl transform -rotate-2">
                    <div className="bg-white/20 rounded-lg h-32"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Фоновые элементы */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}