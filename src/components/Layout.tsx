import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  React.useEffect(() => {
    // Add the chat widget script
    const script = document.createElement("script")
    script.src = "https://widgets.leadconnectorhq.com/loader.js"
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js")
    script.setAttribute("data-widget-id", "68bca8a4fa0aac0941eb7e86")
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col bg-neutral-white text-neutral-dark font-body">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default Layout

