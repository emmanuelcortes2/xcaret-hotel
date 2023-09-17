'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import * as data from '../data/data.json'

export default function NavBar() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchedData = async () => {
  //     const res = await fetch(
  //       'https://raw.githubusercontent.com/javialcocer/test-json/main/data.json'
  //     );
  //     const data = await res.json();
  //     setData(data);
  //   };

  //   fetchedData();
  // }, []);

  return (
    <nav className="flex flex-row p-4 items-center justify-between h-20">
      {data && (
        <Image src={data.es.navbar.logo} width={125} height={125} alt='hotel xcaret logo'/>
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
  );
}
