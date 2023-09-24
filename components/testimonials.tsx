import React, { Fragment } from "react"
import Image from "next/image"
import JohnDoe from "@/images/johndoe.png"
import { useKeenSlider } from "keen-slider/react"

const Testimonials = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
  })

  /** ITEM IN THE ARRAY IS EACH SLIDE IN THE SLIDER */
  const reviews = [
    {
      name: "John Doe",
      position: "Sr. Systems Design Manager at Lorem Ipsum",
      comment:
        "Consequat interdum varius sit amet mattis vulputate. Laoreet non curabitur gravida arcu ac tortor. Id semper risus in hendrerit gravida rutrum quisque non. Consectetur a erat nam at lectus. Venenatis tellus in metus vulputate eu. Pharetra massa massa ultricies mi quis hendrerit. Non sodales neque sodales ut etiam sit amet nisl. Cursus  mattis molestie a iaculis at erat. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nibh praesent tristique magna sit. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
      image: "",
      alt: "",
    },
    {
      name: "2nd review",
      position: "Sr. Systems Design Manager at Lorem Ipsum",
      comment:
        "Consequat interdum varius sit amet mattis vulputate. Laoreet non curabitur gravida arcu ac tortor. Id semper risus in hendrerit gravida rutrum quisque non. Consectetur a erat nam at lectus. Venenatis tellus in metus vulputate eu. Pharetra massa massa ultricies mi quis hendrerit. Non sodales neque sodales ut etiam sit amet nisl. Cursus  mattis molestie a iaculis at erat. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nibh praesent tristique magna sit. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
      image: "",
      alt: "",
    },
    {
      name: "3rd review",
      position: "Sr. Systems Design Manager at Lorem Ipsum",
      comment:
        "Consequat interdum varius sit amet mattis vulputate. Laoreet non curabitur gravida arcu ac tortor. Id semper risus in hendrerit gravida rutrum quisque non. Consectetur a erat nam at lectus. Venenatis tellus in metus vulputate eu. Pharetra massa massa ultricies mi quis hendrerit. Non sodales neque sodales ut etiam sit amet nisl. Cursus  mattis molestie a iaculis at erat. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Nibh praesent tristique magna sit. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant.",
      image: "",
      alt: "",
    },
  ]

  return (
    <div className="flex h-screen flex-col content-between">
      <div className=" pt-4">
        <div className="mx-auto w-[95%]">
          <div
            ref={sliderRef}
            className="keen-slider hover:cursor-grab sm:h-80 md:h-112 lg:h-112 xl:h-128"
          >
            {/* ======= PROJECT SLIDE ======= */}
            {reviews.map(
              (item: { name: string; position: string; comment: string }) => {
                return (
                  <div
                    key={item.name}
                    className="keen-slider__slide grid transform-gpu grid-cols-1 pl-4 md:space-x-1.5 xl:space-x-2"
                  >
                    <div className="text-white">
                      <p className="text-lg">{item.comment}</p>

                      <div className="mt-5">
                        <div className="flex content-center py-1">
                          <div className="py-3">
                            <Image
                              src={JohnDoe}
                              alt="John Doe"
                              objectFit="contain"
                            />
                          </div>

                          <div className="ml-4 w-3/5">
                            <h4>-{item.position}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
            )}
          </div>
        </div>
      </div>

      {/* ========= WHAT PEOPLE SAY ============ */}
      <div className="mt-auto rounded-tl-3xl bg-[#89CFFD]">
        <div className="mx-auto w-5/6 px-2 py-2">
          <h3 className="mb-2 text-right text-7xl">What People Say</h3>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
