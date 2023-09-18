'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }
import ButtonBook from './ButtonBook'
export default function Promotions() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  return (
    <section className='p-4'>
      {' '}
      {data && (
        <>
          <h3 className='text-xl text-center capitalize'>{data.es.promotions[0].title}</h3>
          <p className='text-lg pt-2'>{data.es.promotions[0].Subtitle}</p>
          <p className='pt-2'>{data.es.promotions[0].paragraphs[0]}</p>
          <ButtonBook />
        </>
      )}
    </section>
  )
}
