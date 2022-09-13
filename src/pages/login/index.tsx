import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>ログイン | PC管理システム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type="text" placeholder='ユーザID' />
      <input type="text" placeholder='パスワード' />
      <Link href="/">
        <button>ログイン</button>
      </Link>
    </Layout>
  )
}

export default Login