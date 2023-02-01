import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>HONGZHEN CHEN Page</title>
      </Head>
      <h1>HONGZHEN CHEN Page
      </h1>
      <p>
        This is a sample page for HONGZHEN CHEN
      </p>
      <Link href="/about">About</Link>
    </>
  )
}
