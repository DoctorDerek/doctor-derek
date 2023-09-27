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
    <div className="h-[10vh] md:w-14">
      {/* ======== MOBILE NAVBAR ======= */}
      <div className="sticky top-0 z-40 flex h-full bg-[#FFE366] shadow-sm sm:gap-x-6 sm:px-6 md:h-screen md:px-0">
        <div className="flex w-full md:flex-col">
          <div className="w-1/4 pl-3 pt-3 md:h-[40vh] md:w-full md:pt-0 md:order-2 md:pl-0">
            <Link
              href="/"
              className="md:block md:h-1/2 md:pt-4 md:w-full"
            >
              <Image src={Logo} object-fit="contain" alt="Logo" className="md:-rotate-90 md:py-4 " />
            </Link>
          </div>
          <button
            type="button"
            className="text-[#FFE366]md:mt-60 ml-auto bg-[#89cffd] p-3.5 md:ml-0 md:order-1"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <XMarkIcon className="h-6 w-6 text-[#FFE366]" aria-hidden="true" />
            ) : (
              <Bars3Icon
                className="h-6 w-6 text-[#FFE366]"
                aria-hidden="true"
              />
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
            className={`md:h-11/12 flex h-full flex-col rounded-tr-3xl duration-500 md:mt-auto ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="flex h-full w-11/12 flex-col content-between rounded-tr-2xl bg-[#89cffd] md:w-3/4">
              <ul role="list" className="pt-8">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={
                        "md:restora-bold block p-2 text-5xl font-semibold md:p-1 md:pr-12 md:text-end md:text-7xl"
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto w-10/12 pb-2 md:hidden">
                <IconLinks fill={"white"} flexSpacing={"justify-around"} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
