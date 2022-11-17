import { Navbar, Button } from "flowbite-react";

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar
        fluid={true}
        rounded={true}
      >
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PC管理システム
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>
            ログイン
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/pc">
            PC管理
          </Navbar.Link>
          <Navbar.Link href="/">
            各種マスタ登録
          </Navbar.Link>
          <Navbar.Link href="/">
            ユーザ管理
          </Navbar.Link>
          <Navbar.Link href="/">
            設定
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </div>
  )
}

export default Layout