'use client'
import { useEffect, useState } from 'react'
import data from '../data/data.json' assert { type: 'json' }

export default function Footer() {
  const [datos, setDatos] = useState(null)
  useEffect(() => {
    setDatos(data)
  }, [])
  return (
    <footer className="flex flex-col text-gray-500 bg-black p-4 text-xs">
      {datos && (
        <>
          <p className="text-center">{datos.es.footer.copy}</p>
          <ul className="flex flex-row justify-between p-4">
            {datos.es.footer.links.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.tittle}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </footer>
  )
}
