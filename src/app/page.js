import Image from 'next/image'
import Headline from '../../components/Headline'
import Promotions from '../../components/Promotions'
import Carousel from '../../components/Carousel'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-0 items-center justify-between ">
      <Headline />
      <Carousel />
      <Promotions />
    </main>
  )
}
