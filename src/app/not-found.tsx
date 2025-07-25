'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">404</h1>
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Oops! The page you&apos;re looking for seems to have wandered off. Don&apos;t worry, let&apos;s get you back on track with your learning journey.
            </p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Need help?
            <a href="mailto:support@10minuteschool.com" className="text-blue-600 hover:text-blue-700 underline ml-1">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
