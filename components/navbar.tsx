import React, { useState } from "react"
import Image from "next/image"
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline"
import D0_Intro_Animation from "@/images/D0_Intro_Animation.jpg"

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Experience", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Testimonials", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false) //shows close & hamburger menu

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto px-6">
      <div className="flex h-16 shrink-0 justify-between border-red-500 border-2">
        {/* ======LOGO======== */}
        <Image src={D0_Intro_Animation} alt="Logo" width={100} height={100} />

        {/* ======MENU BUTTON======== */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Navbar links */}
      <nav className={`flex flex-1 flex-col ${isOpen ? '' : 'hidden'}`}>
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={
                      "hover:text-white hover:bg-indigo-700 group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
