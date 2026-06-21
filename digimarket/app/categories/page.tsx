import { Link } from "lucide-react";
import { categories } from "@/data/categories";

export default function CategoriesPage() {
    return (
        <div className="max-w-7xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-3 justify-center">
                    {categories.map((item) => (
                        <Link
                            key={item.slug}
                            href={`/categories/${item.slug}`}
                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-600 transition-colors font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}