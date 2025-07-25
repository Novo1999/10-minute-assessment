'use client'

import { AlertTriangle, ArrowLeft, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Error Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4 animate-pulse">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
          <p className="text-gray-600 leading-relaxed">We encountered an unexpected error. Don&apos;t worry, this happens sometimes. You can try refreshing the page or go back to the homepage.</p>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h3 className="text-sm font-semibold text-red-800 mb-2">Error Details:</h3>
            <p className="text-xs text-red-700 font-mono break-all">{error.message}</p>
            {error.digest && <p className="text-xs text-red-600 mt-1">Error ID: {error.digest}</p>}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => reset()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-all duration-200 hover:shadow-md flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            If the problem persists, please{' '}
            <a href="mailto:support@10minuteschool.com" className="text-blue-600 hover:text-blue-700 underline">
              contact our support team
            </a>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-pink-100 rounded-full opacity-30"></div>
      </div>
    </div>
  )
}
