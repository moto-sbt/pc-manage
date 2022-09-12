import Head from 'next/head'

const Home = () => {
  return (
    <div className="min-h-screen flex">
      <Head>
        <title>PC管理システム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="m-8 text-6xl">
          PC管理システム
        </h1>

        <p className="m-8 text-2xl">
          ログイン
        </p>
      </main>
    </div>
  )
}

export default Home