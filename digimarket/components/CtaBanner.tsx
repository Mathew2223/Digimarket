import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-banner rounded-3xl p-12 lg:p-16 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Левая часть */}
            <div>
              <div className="mb-6">
                {/* Иллюстрация человека */}
                <div className="w-48 h-48 bg-white/10 rounded-2xl flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
            
            {/* Правая часть - текст */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">
                Become a creator
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Turn your ideas into reality.
                <br />
                Start creating and selling your products today.
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-lg"
              >
                Start Selling
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}