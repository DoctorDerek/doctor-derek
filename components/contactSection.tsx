import Image from "next/image"
import contactimage from "@/images/contactimage.png"
import DerekSpriteImg from "@/images/DerekSpriteImg.png"
import Footer from "./footer"

const ContactSection = () => {
  return (
    <div className="purple-bg-img bg-[#311B4D]">
      <div className="flex h-screen flex-col md:flex-row">
        <div className="mx-auto h-[45%] w-[85%] md:flex md:h-full md:w-1/2 md:flex-col md:pl-8 lg:w-[45%] lg:justify-start lg:pl-20">
          <div className="py-4 md:mb-2 md:mt-16 lg:mb-0 lg:py-0">
            <h2 className="text-7xl text-[#FFE366] md:text-8xl lg:pb-14 lg:pt-8 lg:text-9xl">
              Contact
            </h2>
          </div>

          {/* Flipping images */}
          <div className="perspective w-3/5 md:h-1/2 md:w-full">
            <div className="md:hover:cursor-pointer">
              <div className="wrapper md:relative lg:inline-flex">
                {/*==== Front image ======  md:h-3/4 md:w-[85%]*/}
                <div className="front h-full">
                  <Image
                    src={contactimage}
                    alt="John Doe"
                    className="object-cover md:relative"
                  />
                </div>
                {/*===== Back image ======= */}
                <div className="back hidden h-full md:absolute md:bottom-0 md:left-0 md:right-0 md:top-0 md:block">
                  <Image
                    src={DerekSpriteImg}
                    alt="John Doe"
                    className="object-cover md:relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-[55%] w-full flex-col md:mt-0 md:h-full md:w-1/2 md:pl-8 lg:w-[55%]">
          <div className="mx-auto mt-8 w-4/5 md:ml-0 md:mt-32 md:h-1/6 md:w-11/12 lg:my-auto lg:ml-auto lg:mr-0 lg:w-11/12 lg:pl-14 lg:pt-16">
            <p className="pl-2 text-xl leading-8 text-[#89CFFD] md:pl-0 md:text-xl lg:pr-20 lg:text-2xl lg:leading-9">
              Discover the power of versatile frontend developing with Derek
              Austin. Get in touch to discuss your next development project, or
              to simply chat.
            </p>
          </div>
          {/* ======Footer ======== */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default ContactSection
