import React from "react"
import Sidebar from "@/components/shared/Sidebar"
import MobileNav from "@/components/shared/mobileNav"
import { Toaster } from "@/components/ui/toaster"

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className="root">
      <Sidebar/>
      <MobileNav/>
      <div className="root-container">
        <div className="wrapper">
            {children}
        </div>
      </div>
      <Toaster/>
    </main>
  )
}

export default Layout