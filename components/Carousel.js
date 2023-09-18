'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }
import Image from 'next/image'
export default function Carousel() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  return (
    <section>
      {data && (
        <div className="relative flex items-center justify-center w-screen dark:text-gray-50">
          <div className="flex items-center justify-start w-screen h-full gap-6 py-4 px-4 mx-auto overflow-auto lg:gap-8">
            {data.es.carousel.mobile.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                width={800}
                height={1000}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
