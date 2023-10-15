import React, { Fragment } from "react"
import Image from "next/image"
import codeIcon from "images/codeIcon.svg"

export default function WorkExpSlider({
  arry,
}: {
  /**
   * arry: array nested in workExperienceList object
   */
  arry: {
    /**
     * duration: string value of the timespan in a position and used as React keys
     */
    duration: string
    /**
     * position: string value of the role worked in a company
     */
    position: string
    /**
     * company: string value of name of the company
     */
    company: string
  }[]
}) {
  return arry.map(
    (
      item,
      /**
       * index: number value used to determine whether to add css styles
       */
      index: number,
    ) => {
      return (
        <li
          key={item.position}
          className={`relative border-l-4 border-[#F38B57] pb-4 pl-4 ${
            index === arry.length - 1 ? "rounded-bl-xl border-b-4" : ""
          }`}
        >
          {/* Code icon */}
          <Image
            src={codeIcon}
            className="absolute -left-4 top-0 h-6 w-6 bg-[#FFE366]"
            alt="code icon"
          />
          <div className="">
            <p className="text-[#997f59]">{item.duration}</p>
          </div>
          <div className="py-1">
            <p className="restorabold text-lg text-[#311B4D]">
              {item.position}
            </p>
          </div>
          <div>
            <p className="restorabold text-lg">{item.company}</p>
          </div>
        </li>
      )
    },
  )
}
