import Image from "next/image"
import M0_Intro_Animation from "@/images/M0_Intro_Animation.jpg"

const classNames = (...args: string[]) => args.filter(Boolean).join(" ")

export default function TopSection({
  aspect,
}: {
  /** The aspect ratio of the images, i.e. desktop | mobile */
  aspect: "aspect-[5760/3200]" | "aspect-[1500/2668]"
}) {
  return (
    <>
      <Image
        src={M0_Intro_Animation}
        alt={"MO_Intro_Animation"}
        className={classNames(
          // We use "bg-yellow" to fill in the background (sides)
          "h-[80dvh] w-full object-contain",
          aspect,
        )}
        placeholder="blur"
      />
    </>
  )
}
