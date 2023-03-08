import Head from "next/head";
import Link from "next/link";
import LoginButton from "../components/login-btn";
export default function Home() {
  return (
    <div className="center">
      <Head>
        <title>HONGZHEN CHEN Page</title>
      </Head>
      <h1>HONGZHEN CHEN Page</h1>
      <div>
        <LoginButton />
      </div>
      <p>This is a sample page for HONGZHEN CHEN.</p>

      <Link href="/about">About</Link> |
      <Link href="/blogs">Blogs</Link>
    </div>
  );
}