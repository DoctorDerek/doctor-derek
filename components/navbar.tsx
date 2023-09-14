import { Fragment, useState } from "react"
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
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

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="">
      {/* ======== MOBILE NAVBAR ======= */}
      <div className="lg:pl-72">
        <div className="bg-[#FFE366] sticky top-0 z-40 flex h-16 shrink-0 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 ">
          <div className="flex w-full">
            <Link href="/" className="w-1/4 pt-3 pl-3 block">
              <Image src={Logo} object-fit="contain" alt="Logo" />
            </Link>
            <button
              type="button"
              className="ml-auto p-3.5 text-[#FFE366] lg:hidden bg-[#89cffd]"
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
      </div>

      <div className="fixed inset-0 flex">
        {/* <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button
            type="button"
            className="m-2.5 p-2.5"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div> */}

        {/* =========== SIDEBAR MOBILE MENU =========== */}
        <div className="flex grow flex-col overflow-y-auto ">
          {/* ========= div creates spacing between links and navbar */}
          <div className="h-16"></div>
          {/* =========== NAVIGATION LINKS ========== */}
          <nav
            className={`flex flex-1 flex-col duration-500 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } `}
          >
            <div className="w-11/12 rounded-tr-3xl bg-[#89cffd]  h-full flex-col">
            <ul
              role="list"
              className="flex flex-1 flex-col pt-8"
            >
              <li>
                <ul role="list" className="mx-2 space-y-3">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={
                          "group flex gap-x-3 rounded-md p-2 text-5xl leading-8 font-semibold"
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="mt-auto mb-2 w-10/12">
            <IconLinks fill={'white'} />
            </div>
            </div>            
          </nav>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center"></div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                {/* <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={
                          "bg-indigo-700 text-indigo-200 hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        }
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
