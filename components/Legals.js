'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }
export default function Legals() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  return (
    <div className='flex flex-col gap-4 p-4 bg-gray-200 w-screen text-sm text-gray-700'>
      {data && (
        <>
          <p>{data.es.legals.split('<br/>')[0]}</p>
          <p>{data.es.legals.split('<br/>')[1]}</p>
          <p>{data.es.legals.split('<br/>')[2]}</p>
        </>
      )}
    </div>
  )
}
