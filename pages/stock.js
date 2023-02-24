import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {

  const [stock, setStock] = useState([]);

  useEffect(() => {
    // fetch data from API
    fetch("/api/stock/products")
      .then(res => res.json())
      .then(data => {
        // do something with data
        console.log(data)
        setStock(data)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Stock</title>
      </Head>
      <h1>Stock</h1>
      <ul>
        {
          stock.map(stock => {
            return (
              <Link href={`/stock/${stock._id}`}>
                <li key={stock._id}> {stock.title}</li>
              </Link>
            )
          })
        }
      </ul>
      <p>
      </p>

    </>
  )
}
