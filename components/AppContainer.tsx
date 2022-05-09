import Head from "next/head"
import Link from "next/link"
import React from "react"

import UserAuthComponent from "@/components/UserAuthComponent"

export default function AppContainer({
  pageTitle,
  children,
}: {
  pageTitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>
          {/* Add "Pokédex" before the passed-in pageTitle prop, if any: */}
          Pokédex by @DoctorDerek{pageTitle ? ` - ${pageTitle}` : ""}
        </title>
      </Head>
      <header className="absolute top-0 w-full">
        <FlexAlignmentBox>
          <div>
            <Link href="/">Pokédex</Link> by{" "}
            <Link href="https://linkedin.com/in/derek-austin">
              @DoctorDerek
            </Link>
            {pageTitle ? ` - ${pageTitle}` : ""}
          </div>
          <UserAuthComponent />
        </FlexAlignmentBox>
      </header>
      <main>{children}</main>
      <footer className="absolute bottom-0 w-full">
        <FlexAlignmentBox>
          <Link href="https://github.com/DoctorDerek/pokedex">
            View the source code on GitHub
          </Link>
          <Link href="https://DoctorDerek.medium.com">Read my Medium blog</Link>
        </FlexAlignmentBox>
      </footer>
    </div>
  )
}

function FlexAlignmentBox({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full justify-between py-2 px-4">{children}</div>
}
