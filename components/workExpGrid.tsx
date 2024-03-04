import React from "react"
import Image from "next/image"
import codeIcon from "images/codeIcon.svg"

export default function WorkExpGrid({ ...clonedList }) {
  /** Number of items in combinedLists divided by 2 for placeholder space */
  const getHalfNum = Math.floor(clonedList.length / 2)

  return clonedList.map(
    (
      /**
       * item: object of string key value pairs
       */
      item: {
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
      },
      index: number,
    ) => {
      /* Ternary operators adds CSS borders */
      return (
        <li
          className={`pl-4 
        ${
          index === getHalfNum - 1 ||
          index === getHalfNum - 2 ||
          index === getHalfNum - 3
            ? "mr-8 border-r-4"
            : ""
        }
        ${index === getHalfNum - 1 && "rounded-b-3xl border-b-4"} 
        ${
          index < getHalfNum || index > getHalfNum + 3
            ? "border-l-4 border-[#F38B57]"
            : ""
        }
        ${index === clonedList.length - 1 && "border-l-0"}
        ${index === 2 && "relative"}
        `}
          key={`${item.duration} ${index}`}
        >
          <div className="relative flex flex-col">
            {/* Hides code icon if item.company string contains placeholder */}
            {!item.company.includes("placeholder") && (
              <Image
                src={codeIcon}
                className="absolute -left-8 top-0 h-6 w-6 bg-[#FFE366]"
                alt="code icon"
              />
            )}
            <p className="restorabold text-xl">{item.duration}</p>
            <p className="restorabold py-2 text-xl">{item.position}</p>
            <p
              className={`${
                item.company.includes("placeholder") ? "invisible" : ""
              } restorabold pb-2 text-lg`}
            >
              {item.company}
            </p>
          </div>
          {/* Horizontal connecting line for the 3rd item in work experience */}
          {index === 2 && (
            <div className="absolute -right-8 top-0 w-8 border-b-2 border-t-2 border-[#F38B57]"></div>
          )}
        </li>
      )
    },
  )
}
