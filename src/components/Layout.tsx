type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex">
      <main>{children}</main>
    </div>
  )
}

export default Layout