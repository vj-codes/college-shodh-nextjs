import Link from "next/link"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-600 mb-8">Page Not Found</h2>
                <p className="text-center text-gray-500 mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

