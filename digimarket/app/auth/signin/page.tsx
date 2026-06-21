'use client'

import Link from 'next/link'
import { useState } from "react"

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
                <form onSubmit={handleSubmit} className="space-y-4" action="">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link href="/auth/signup" className="text-purple-600 hover:underline">
                        Sign Up
                    </Link>
                </p>
                <div className="flex justify-center pt-1">
                    <Link href="/auth/forgot-password" className="text-sm text-purple-600 hover:underline">
                        Forgot password?
                    </Link>
                </div>
            </div>
        </div>
    )
}