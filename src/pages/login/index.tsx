import Link from 'next/link'
import Head from 'next/head'
import Layout from '@/components/Layout'

const login = async () => {
  try {
    const host = 'localhost:3001'
    const protcol = /^localhost/.test(host) ? 'http' : 'https'
    const url = `${protcol}://${host}/login`
    const respose = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: "motosbt",
        password: "password"
      })
    }).then(data => data.json())
    console.log(respose)
  } catch(e) {
    console.log(e)
  }
}

const Login = (props) => {
  return (
    <Layout>
      <Head>
        <title>ログイン | PC管理システム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <input type="text" placeholder='ユーザID' />
      <input type="text" placeholder='パスワード' />
      <Link href="/">
        <button onClick={login}>ログイン</button>
      </Link>
    </Layout>
  )
}

export default Login