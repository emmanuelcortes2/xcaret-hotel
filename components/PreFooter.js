'use client'
import { useEffect, useState } from 'react'
import datos from '../data/data.json' assert { type: 'json' }
import Image from 'next/image'

export default function PreFooter() {
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(datos)
  }, [])

  return (
    <>
      <div className="bg-zinc-600 text-gray-400 text-capitalize">
        {data && (
          <>
            <ul className="flex flex-row gap-4 justify-center p-2">
              <li>
                <a href={data.es.prefooter.social.facebookUrl}>
                  <Image
                    src="/f_icon.svg"
                    width={35}
                    height={35}
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href={data.es.prefooter.social.twitterUrl}>
                  <Image
                    src="/twitter_icon.svg"
                    width={35}
                    height={35}
                    alt="twitter"
                  />
                </a>
              </li>
              <li>
                <a href={data.es.prefooter.social.instagramUrl}>
                  <Image
                    src="/insta_icon.svg"
                    width={35}
                    height={35}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
            <p className="pl-6 text-white">
              {data.es.prefooter.contactCenter.title}
            </p>
            <p className="pl-6">{data.es.prefooter.contactCenter.email}</p>
            <ul className="flex flex-row gap-9 px-6 py-4 justify-between">
              <li className="flex flex-col">
                <a href="">{data.es.prefooter.numbers[0].name.split(':')} </a>
                <span>{data.es.prefooter.numbers[0].number}</span>
              </li>
              <li className="flex flex-col">
                <a href="">{data.es.prefooter.numbers[1].name.split(':')}</a>
                <span>{data.es.prefooter.numbers[1].number}</span>
              </li>
              <li>
                <select className='flex flex-col bg-zinc-600 w-36 h-14 text' >
                  <option
                    className="text-zinc-400"
                    defaultValue
                  >
                    Resto del Mundo
                  </option>
                  {data.es.prefooter.numbers.map((item, index) => (
                    <option key={index} value={item.number}>
                      {item.name.split(':')}{' '}{item.number}
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
