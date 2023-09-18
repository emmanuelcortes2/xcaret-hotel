'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }
export default function Headline() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  return (
    <>
      {data && (
        <>
          <section className="flex flex-col gap-8 mt-0 bg-gray-200 w-screen p-12 mb-24">
            <h1 className='text-4xl text-center'>{data.es.header.h1}</h1>
            <h2 className='text-3xl text-center'>{data.es.header.discount}</h2>
            <p className='text-xl text-gray-700'>{data.es.header.paragraphs[1]}</p>
          </section>
        </>
      )}
    </>
  )
}
