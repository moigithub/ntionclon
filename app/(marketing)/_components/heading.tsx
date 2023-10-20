'use client'

import { Button } from '@/components/ui/button'
import { useConvexAuth } from 'convex/react'
import { ArrowRight } from 'lucide-react'
import { Spinner } from './spinner'
import Link from 'next/link'
import { SignInButton } from '@clerk/clerk-react'

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        ur ideas, docs & plans on same place. welcome to <span className='underline'>Bunch</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>more text here </h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Get started <ArrowRight className='h-4 w-4 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get started <ArrowRight className='h-4 w-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  )
}
