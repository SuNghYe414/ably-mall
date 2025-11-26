import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <button className="text-red-800 bg-amber-200">Button</button>
      <Button>Default Button</Button>
      <Button variant={'destructive'} size={'lg'}>
        Destructive lg Button
      </Button>
      <Button variant={'outline'} size={'sm'}>
        Outline sm Button
      </Button>
      <Button variant={'secondary'} size={'sm'}>
        Secondary sm Button
      </Button>
      <Button variant={'ghost'} size={'sm'}>
        Ghost sm Button
      </Button>
    </div>
  )
}
