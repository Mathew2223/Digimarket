import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-8 py-4">
                    <Link href="/catalog" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                        Catalog
                    </Link>
                    <Link href="/categories" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                        Categories
                    </Link>
                    <Link href="/authors" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                        Authors
                    </Link>
                    <Link href="/pricing" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                        Pricing
                    </Link>
                </div>
            </div>
        </nav>
    )
}