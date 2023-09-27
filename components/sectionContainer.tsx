import React from "react"
import Navbar from "./navbar"

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="section h-screen bg-[#FFE366] flex flex-col md:flex-row">
      <Navbar />
      {children}
    </div>
  )
}
