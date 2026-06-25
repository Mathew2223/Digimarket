import Link from 'next/link'
import { Metadata } from 'next'
import { Globe, DollarSign, Zap, BarChart3, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Sell on DigiMarket | Earn money from your digital products',
    description: 'Start selling your digital products to thousands of developers and designers',
};

const benefits = [
    { icon: Globe, title: 'Global Reach', description: 'Access to 100,000+ developers and designers worldwide' },
    { icon: DollarSign, title: 'Low Commission', description: 'Keep 95% of your earnings with our Pro plan' },
    { icon: Zap, title: 'Instant Payouts', description: 'Get paid immediately when a sale is made' },
    { icon: BarChart3, title: 'Analytics', description: 'Track sales, views, and customer behavior' },
    { icon: Shield, title: 'Copyright Protection', description: 'We protect your work from piracy' },
    { icon: Users, title: 'Community', description: 'Join a network of successful creators' },
]

const steps = [
    { step: '01', title: 'Create Account', description: 'Sign up in less than 2 minutes' },
    { step: '02', title: 'Upload Product', description: 'Add your digital asset with description and preview' },
    { step: '03', title: 'Set Price', description: 'Choose your price or offer it for free' },
    { step: '04', title: 'Earn Money', description: 'Get paid instantly for every sale' },
]

export default function SellPage() {
    return (
        <div>
            <section className="bg-linear-to-br from-purple-50 via-white to-pink-50 py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">Start selling your digital products</h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Reach thousands of developers and designers.Earn money from your UI kits, templates, icons, and more.</p>
                    <Link
                        href="/auth/signup"
                        className="inline-block bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-700 transition-all hover:shadow-lg"
                    >
                        Get Started Free
                    </Link>
                </div>
            </section>
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Why sell with DigiMarket?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                                <benefit.icon className='w-12 h-12 text-purple-600 mb-4' />
                                <h3 className='text-xl font-bold mb-2'>{benefit.title}</h3>
                                <p className='text-gray-600'>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">How it works</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className='text-center'>
                                <div className="text-6xl font-bold text-purple-200 mb-4">{step.step}</div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-linear-to-r from-purple-600 to-pink-600">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">Ready to start earning?</h2>
                    <p className="text-xl mb-8 text-white/90">Join thousands of creators who are already making money on DigiMarket</p>
                    <Link
                        href="/auth/signup"
                        className="inline-block bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all"
                    >
                        Create Your Account
                    </Link>
                </div>
            </section>
        </div>
    )
}