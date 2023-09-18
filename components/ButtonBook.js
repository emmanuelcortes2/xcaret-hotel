'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }

export default function ButtonBook() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  return (
    <div className="flex justify-center py-8">
      {data && (
        <a
          className="px-24 py-2 border border-black hover:bg-black hover:text-white"
          href={data.es.buttonBook.href}
        >
          {data.es.buttonBook.text}
        </a>
      )}
    </div>
  )
}
