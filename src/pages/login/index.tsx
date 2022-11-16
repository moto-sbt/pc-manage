import Link from 'next/link'
import Head from 'next/head'
import { Button, TextInput, Label, Checkbox } from "flowbite-react";
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
      <div className="flex flex-col gap-4">
        <div>
          <TextInput
            id="userId"
            type="text"
            placeholder="ユーザID"
          />
        </div>
        <div>
          <TextInput
            id="password"
            type="password"
            placeholder="パスワード"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label>
            ログイン情報をブラウザに保存する
          </Label>
        </div>
        <Link href="/">
          <Button onClick={login}>ログイン</Button>
        </Link>
      </div>
    </Layout>
  )
}

export default Login