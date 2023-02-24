import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ stock }) {

  function deleteStock(id) {
    fetch(`https://stock-next22-hx0iel4bz-sleepingcayman.vercel.app/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        alert("Deleting " + id)
      })

  }

  return (
    <>
      <Head>
        <title>Stock</title>
      </Head>
      <h1>Stock</h1>
      <table><tbody>
        {
          stock.map(stock => {
            return (
              <tr key={stock._id}>
                <td>
                  <Link href={`/stock/${stock._id}`}>
                    {stock.code}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteStock(stock._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/stock/products/`)
  const stock = await res.json()
  // console.debug('stock 1', stock)
  return { props: { stock } }
}