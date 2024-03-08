import Image from "next/image"
import Logo from "@/images/Logo.svg"
import Navbar from "./navbar"
import ReactParallaxTilt from "react-parallax-tilt"

/** Helper function to join Tailwind CSS classNames. Filters out falsy values */
const classNames = (...args: string[]) => args.filter(Boolean).join(" ")

export default function TopSection() {
  return (
    <div className="yw-bg-img h-screen">
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <ReactParallaxTilt
          tiltMaxAngleX={37}
          tiltMaxAngleY={37}
          perspective={1000}
          glareMaxOpacity={0}
          className="flex h-[60vh] w-[60vw] items-center justify-center"
        >
          <Image
            src={Logo}
            alt={"Derek Develops Logo"}
            // The margin bottom here vertically centers the logo:
            className={classNames("mb-[10vh] object-fill")}
          />
        </ReactParallaxTilt>
      </div>
    </div>
  )
}
