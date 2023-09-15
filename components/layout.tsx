import Footer from "./footer"
import Navbar from "./navbar"

type Props ={
  children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
