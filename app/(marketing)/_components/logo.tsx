import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const font = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-x-2'>
      <Image className='dark:hidden' src='/next.svg' height='40' width={40} alt='logo' />
      <Image className='hidden dark:block' src='/vercel.svg' height='40' width={40} alt='logo' />
      <p className={cn('font-semibold', font.className)}>Bunch</p>
    </div>
  )
}
