import Head from 'next/head'
import Link from 'next/link'
import { Table } from "flowbite-react"
import Layout from '@/components/Layout'

const Pc = (props) => {
  return (
    <Layout>
      <Head>
        <title>PC管理 | PC管理システム</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mb-10'>pc管理</h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>
            製品名
          </Table.HeadCell>
          <Table.HeadCell>
            型番
          </Table.HeadCell>
          <Table.HeadCell>
            シリアル番号
          </Table.HeadCell>
          <Table.HeadCell>
            納品日
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              詳細
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              HOGE1234
            </Table.Cell>
            <Table.Cell>
              xxxxxxxx
            </Table.Cell>
            <Table.Cell>
              2022/11/17
            </Table.Cell>
            <Table.Cell>
              <Link href="/pc">
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  詳細
                </a>
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>
              PIYO1234
            </Table.Cell>
            <Table.Cell>
              xxxxxxxx
            </Table.Cell>
            <Table.Cell>
              2022/11/16
            </Table.Cell>
            <Table.Cell>
              <Link href="/pc">
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  詳細
                </a>
              </Link>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              dynabook
            </Table.Cell>
            <Table.Cell>
              FUGA1234
            </Table.Cell>
            <Table.Cell>
              xxxxxxxx
            </Table.Cell>
            <Table.Cell>
              2022/11/15
            </Table.Cell>
            <Table.Cell>
              <Link href="/pc">
                <a
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  詳細
                </a>
              </Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Layout>
  )
}

export default Pc