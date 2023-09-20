import Image from "next/image"
import JohnDoe from "@/images/johndoe.png"

const Testimonials = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="pt-4 px-2 mb-16">
        <div className="w-5/6 mx-auto">
          <div className=" text-white">
            <p className="text-lg">
              Consequat interdum varius sit amet mattis vulputate. Laoreet non
              curabitur gravida arcu ac tortor. Id semper risus in hendrerit
              gravida rutrum quisque non. Consectetur a erat nam at lectus.
              Venenatis tellus in metus vulputate eu. Pharetra massa massa
              ultricies mi quis hendrerit. Non sodales neque sodales ut etiam
              sit amet nisl. Cursus mattis molestie a iaculis at erat. Erat
              pellentesque adipiscing commodo elit at imperdiet dui accumsan.
              Nibh praesent tristique magna sit. Lorem ipsum dolor sit amet
              consectetur adipiscing elit pellentesque habitant.
            </p>

            <div className="mt-5">
              <div className="flex content-center py-1 ">
                <div className="py-3">
                  <Image src={JohnDoe} alt="John Doe" objectFit="contain" />
                </div>

                <div className="ml-4 w-3/5">
                  <h4>-John Doe</h4>
                  <h5>Sr. Systems Design Manager at Lorem Ipsum</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= WHAT PEOPLE SAY ============ */}
      <div className="bg-[#89CFFD] rounded-tl-3xl h-1/4">
        <div className="w-5/6 mx-auto py-2 px-2">
          <h3 className="text-7xl mb-2 text-right">What People Say</h3>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
