'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const NotFound = () => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname)
  }, [pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <button onClick={() => router.push('/')} className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
