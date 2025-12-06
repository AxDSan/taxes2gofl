import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-light text-neutral-900 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default Layout

