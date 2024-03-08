import Image from "next/image"
import Logo from "@/images/Logo.svg"
import Navbar from "./navbar"
import ReactParallaxTilt from "react-parallax-tilt"

/** Helper function to join Tailwind CSS classNames. Filters out falsy values */
const classNames = (...args: string[]) => args.filter(Boolean).join(" ")

export default function TopSection({
  aspect,
}: {
  /** The aspect ratio of the images, i.e. desktop | mobile */
  aspect: "aspect-[5760/3200]" | "aspect-[1500/2668]"
}) {
  return (
    <div className="yw-bg-img h-screen">
      <Navbar />
      <ReactParallaxTilt
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        glareMaxOpacity={0}
      >
        <div className="flex h-screen items-center justify-center">
          <Image
            src={Logo}
            alt={"Derek Develops Logo"}
            // The margin bottom here vertically centers the logo:
            className={classNames("mb-[10vh] object-fill", aspect)}
          />
        </div>
      </ReactParallaxTilt>
    </div>
  )
}
