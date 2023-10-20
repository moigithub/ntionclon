import Image from 'next/image'

export const Heroes = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-5xl'>
      <div className='flex items-center'>
        <div className='relative w-[300px] h-[300px] sm:h-[350px] md:h-[400px] md:w-[400px]'>
          <Image src='/hero1.jpg' fill className='object-contain dark:hidden' alt='reading' />
          <Image src='/hero2.jpg' fill className='object-contain hidden dark:block' alt='docs' />
        </div>
        <div className='relative h-[400px] w-[400px] hidden md:block'>
          <Image src='/hero2.jpg' fill className='object-contain dark:hidden' alt='reading' />
          <Image src='/hero1.jpg' fill className='object-contain hidden dark:block' alt='docs' />
        </div>
      </div>
    </div>
  )
}
