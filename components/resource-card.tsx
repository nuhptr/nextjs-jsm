import Image from 'next/image'
import Link from 'next/link'

import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'

interface IResourceCardProps {
  id: string
  title: string
  image: string
  downloadNumber: number
  downloadLink: string
}

export default function ResourceCard({
  id,
  title,
  image,
  downloadNumber,
  downloadLink,
}: IResourceCardProps) {
  return (
    <Card className='w-full max-w-fit border-0 !bg-transparent sm:max-w-[365px]'>
      {/* Header */}
      <Link href={downloadLink} target='_blank'>
        <CardHeader className='flex-center flex-col gap-2.5 !p-0'>
          <div className='h-fit w-full'>
            <Image
              src={image}
              className='h-full rounded-md object-cover'
              width={384}
              height={440}
              alt={title}
              priority
            />
          </div>
          <CardTitle className='text-white paragraph-semibold line-clamp-1 w-full text-left'>
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      {/* Content */}
      <CardContent className='flex-between mt-4 p-0'>
        <div className='flex-center body-medium gap-1.5 text-white'>
          <Image src='/downloads.svg' width={20} height={20} alt='Download Icon' priority />
          {downloadNumber}
        </div>
        <Link
          href={downloadLink}
          target='_blank'
          className='flex-center text-gradient_purple-blue body-semibold gap-1.5'>
          Download Now
          <Image
            src={'/arrow-blue.svg'}
            alt='arrow icon'
            className='w-auto h-auto'
            width={13}
            height={0}
            priority
          />
        </Link>
      </CardContent>
    </Card>
  )
}
