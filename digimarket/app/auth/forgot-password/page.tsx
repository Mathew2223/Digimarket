'use client'

import Link from 'next/link'
import { useState } from "react"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-2">Forgot Password</h1>
                <p className="text-center text-gray-600 mb-6">
                    Enter your email to receive reset instructions
                </p>

                {isSubmitted ? (
                    <div className="text-center">
                        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                            Check your email! We sent a reset link to <strong>{email}</strong>
                        </div>
                        <Link
                            href="/auth/signin" 
                            className="text-purple-600 hover:underline font-medium"
                        >
                            ← Back to Sign In
                        </Link>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleSubmit} className="space-y-4" action="">
                            <div>
                                <label htmlFor="" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                                    placeholder="your@example.com"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                            >
                                Send Reset Link
                            </button>
                        </form>
                        <p className="text-center text-sm text-gray-600 mt-6">
                            Remember your password?{' '}
                            <Link href="../signin" className="text-purple-600 hover:underline">
                                Sign In
                            </Link>
                        </p>
                    </>
                )}
            </div>
        </div>
    )
}