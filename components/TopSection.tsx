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
    <div className="yw-bg-img md:h-[100vh]">
      <Navbar />
      <ReactParallaxTilt
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        glareColor={"rgb(255,0,0)"}
      >
        <div className="flex h-screen flex-col items-center justify-center">
          <Image
            src={Logo}
            alt={"Derek Develops Logo"}
            className={classNames("relative bottom-24", aspect)}
          />
        </div>
      </ReactParallaxTilt>
    </div>
  )
}
