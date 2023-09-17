'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }

export default function PreFooter() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])
  // setData(data)

  return (
    <>
      <div className="bg-zinc-400">
        {data && (
          <>
            <ul className="flex flex-row gap-4 justify-center p-4">
              <li>
                <a href={data.es.prefooter.social.facebookUrl}>Facebook</a>
              </li>
              <li>
                <a href={data.es.prefooter.social.twitterUrl}>Twiter</a>
              </li>
              <li>
                <a href={data.es.prefooter.social.instagramUrl}>Intagram</a>
              </li>
            </ul>
            <p className="pl-4">{data.es.prefooter.contactCenter.title}</p>
            <p className="pl-4">{data.es.prefooter.contactCenter.email}</p>
            <ul className="flex flex-row gap-4 p-4">
              <li>
                <a href="">{data.es.prefooter.numbers[0].name}</a>
                <span>{data.es.prefooter.numbers[0].number}</span>
              </li>
              <li>
                <a href="">{data.es.prefooter.numbers[1].name}</a>
                <span>{data.es.prefooter.numbers[1].number}</span>
              </li>
              <li>
                <select>
                  {data.es.prefooter.numbers.map((item, index) => (
                    <option key={index}>
                      {item.name}
                      <span>{item.number}</span>
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}
