import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import screens from '@/images/screens.png'

export function Hero() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-5xl font-bold leading-tight mb-6">
              <span className="gradient-text">
                Premium digital assets
                <br />
                for developers and designers
              </span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/categories/ui-kits"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-3xl font-semibold text-lg hover:bg-purple-700 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Browse catalog
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/sell"
                className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all"
              >
                Start Selling
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="relative w-full h-[400] lg:h-[400]">
                <Image
                  src={screens}
                  fill
                  alt="Screens"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-30 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}