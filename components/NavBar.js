'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import datos from '../data/data.json' assert { type: 'json' }

export default function NavBar() {
  // console.log('data', data)
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])

  return (
    <nav className="flex flex-row p-4 items-center justify-between h-20">
      {data && (
        <Image
          src={data.es.navbar.logo}
          width={125}
          height={125}
          alt="hotel xcaret logo"
        />
      )}
      <ul className="flex flex-row gap-4">
        {data && (
          <>
            <li>{data.es.navbar.menu.contact.toUpperCase()}</li>
            <li>ES</li>
            <li>
              <select>
                {data.es.navbar.menu.currency.map((item, index) => (
                  <option key={index}>{item.toUpperCase()}</option>
                ))}
              </select>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
