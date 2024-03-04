import React from "react"
import Navbar from "./navbar"

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="section flex h-screen flex-col bg-[#FFE366] md:flex-row">
      <Navbar />
      {children}
    </div>
  )
}
