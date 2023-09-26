import Image from "next/image"
import M0_Intro_Animation from "@/images/M0_Intro_Animation.jpg"

/** Helper function to join Tailwind CSS classNames. Filters out falsy values */
const classNames = (...args: string[]) => args.filter(Boolean).join(" ")

export default function TopSection({
  aspect,
}: {
  /** The aspect ratio of the images, i.e. desktop | mobile */
  aspect: "aspect-[5760/3200]" | "aspect-[1500/2668]"
}) {
  return (
    <>
      {aspect === "aspect-[5760/3200]" && (
        <Image
          src={M0_Intro_Animation}
          alt={"Intro_Animation"}
          className={classNames(
            // We use "bg-yellow" to fill in the background (sides)
            "h-[90dvh] w-full object-contain",
            aspect,
          )}
          placeholder="blur"
        />
      )}
    </>
  )
}
