import { Fragment, useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Logo from "images/Logo.png"
import Link from "next/link"
import IconLinks from "./iconLinks"

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
]

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="h-[10vh]">
      {/* ======== MOBILE NAVBAR ======= */}
      <div className="sticky top-0 z-40 flex h-full bg-[#FFE366] shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div className="flex w-full">
          <Link href="/" className="block w-1/4 pl-3 pt-3">
            <Image src={Logo} object-fit="contain" alt="Logo" />
          </Link>
          <button
            type="button"
            className="ml-auto bg-[#89cffd] p-3.5 text-[#FFE366]"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        {/* ======== SCROLL INDICATOR ======= */}
      </div>

      <div className="fixed inset-0 mt-auto flex h-[90%]">
        {/* =========== SIDEBAR MOBILE MENU =========== */}
        <div className="flex grow flex-col overflow-y-auto">
          {/* ========= div creates spacing between links and navbar */}
          <div className="h-14" />
          {/* =========== NAVIGATION LINKS ========== */}
          <nav
            className={`flex h-full flex-col md:h-11/12 md:mt-auto rounded-tr-3xl duration-500 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="h-full flex flex-col content-between w-11/12 rounded-tr-2xl bg-[#89cffd] md:w-3/4">
              <ul
                role="list"
                className="pt-8"
              >
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={
                        "block p-2 md:p-1 text-5xl md:text-7xl md:pr-12 md:text-end font-semibold"
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-2 w-10/12 md:hidden">
                <IconLinks fill={"white"} flexSpacing={"justify-around"} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
