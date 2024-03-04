import Image from "next/image"
import Logo from "@/images/Logo.svg"
import Navbar from "./navbar"

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
      <div className="flex h-[93dvh] w-full flex-col justify-center">
        <Image
          src={Logo}
          alt={"Derek Austin Logo"}
          className={classNames(
            "mx-auto block object-contain md:mb-16",
            aspect,
          )}
        />
      </div>
    </div>
  )
}
