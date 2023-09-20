import Image from "next/image"
import clock from "@/images/clock.png"

const PostsSection = () => {
  return (
    <div className="h-screen">
      {/* ====== POST IMAGE ====== */}
      <div className="flex flex-col w-4/5 mx-auto h-5/6">
        <div className="mt-8 relative w-3/4">
          <p className="bg-[#FFE366] rounded-tr-xl pl-3 pr-3 py-1 text-xl mb-2 absolute -top-3 left-4 font-light">
            Typescript
          </p>
          <Image
            src={clock}
            alt="How to user Readonly in Typescript"
            style={{ objectFit: "cover" }}
          />
          <p className="pl-3 py-2 pr-3 text-white text-xl bg-[#FB70AA] w-4/5 rounded-tr-xl absolute -bottom-6">
            How to use Readonly in Typescript
          </p>
        </div>
        <div className="w-3/4 bg-[#b9e3ff]">
          <p className="pl-3 pb-2 pt-7 px-2 text-medium">
            Exploring the power of built-in utility types for safer code
            — TypeScript has introduced a variety of utility types, designed to
            help transform and manipulate ty...
          </p>
          <p className="pl-3 pb-2 text-[#747fa6]">6 min read | May 21, 2023</p>
        </div>
      </div>
    </div>
  )
}

export default PostsSection