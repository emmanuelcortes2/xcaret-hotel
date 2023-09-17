'use client'
import { useEffect, useState } from 'react'
import * as data from '../data/data.json'

export default function Footer() {
  // const [data, setData] = useState(null)
  // useEffect(() => {
  //   const fetchedData = async () => {
  //     const res = await fetch(
  //       'https://raw.githubusercontent.com/javialcocer/test-json/main/data.json'
  //     )
  //     const data = await res.json()
  //     console.log('data', data)
  //     setData(data)
  //   }

  //   fetchedData()
  // }, [])
  return (
    <footer className="flex flex-col text-white bg-gray-400">
      {data && (
        <>
          <p className="text-center">{data.es.footer.copy}</p>
          <ul className="flex flex-row justify-between p-4">
            {data.es.footer.links.map((item, index) => (
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
