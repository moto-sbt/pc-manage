import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

const Home = () => {
  return (
    <div>
      <Head>
        <title>PC管理システム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="m-8 text-6xl">
          PC管理システム
        </h1>
        <Link href="/login">
          <button>ログアウト</button>
        </Link>
      </Layout>
    </div>
  )
}

export default Home