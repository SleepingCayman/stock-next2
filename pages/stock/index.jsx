import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ stock }) {

  function deleteStock(id) {
    fetch(`https://stock-next22.vercel.app/api/stock/products/${id}`,
      {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
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
  const res = await fetch(`https://stock-next22.vercel.app/api/stock/products/`)
  const stock = await res.json()
  // console.debug('stock 1', stock)
  return { props: { stock } }
}