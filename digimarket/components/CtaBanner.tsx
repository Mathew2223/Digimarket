import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import creator from '@/images/creator.png'

export function CtaBanner() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-linear-to-r from-purple-900 via-purple-600 to-orange-500 rounded-3xl shadow-2xl overflow-visible">
          <div className="relative flex items-center py-12 lg:py-16">
            <div className="hidden lg:block absolute left-[-12%] top-[44.4%] -translate-y-1/2 w-[600] h-[600] lg:w-[670] lg:h-[670]">
              <Image
                src={creator}
                fill
                alt="Creator"
                className="object-contain drop-shadow-2xl"
                style={{ left: '-40px' }}
              />
            </div>

            <div className="flex-1 text-white text-center lg:text-left ml-0 lg:ml-[400] px-8 lg:px-12">
              <div className="lg:hidden relative w-[250] h-[250] mx-auto mb-6">
                <Image
                  src={creator}
                  fill
                  alt="Creator"
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Become a creator
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8">
                Turn your ideas into reality.
                <br />
                Start creating and selling your products today.
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all hover:shadow-lg"
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