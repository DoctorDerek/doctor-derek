import Image from "next/image"
import contactimage from "@/images/contactimage.png"
import Footer from "./footer"

const ContactSection = () => {
  return (
    <div className="purple-bg-img bg-[#311B4D]">
      <div className="flex h-screen flex-col md:flex-row">
        <div className="mx-auto w-4/5 h-1/2 md:w-1/2 md:flex md:flex-col md:pl-8 md:h-full md:justify-center lg:justify-start lg:w-[40%]">
          <div className="py-4 md:mb-10 lg:py-0 lg:mb-0">
            <h2 className="text-7xl text-[#FFE366] md:text-8xl lg:text-9xl lg:pt-8 lg:pb-14">Contact</h2>
          </div>
          {/*========= DR DEREK AUSTIN IMAGE ========= */}
          <div className="">
            <Image
              src={contactimage}
              alt="Contact Dr Derek Austin"
              className="w-3/4 md:w-11/12"
            />
          </div>
        </div>

        <div className="mx-auto mt-auto flex flex-col h-1/2 w-full md:h-full md:w-1/2 md:pl-4 md:mt-0 lg:ml-auto lg:w-[60%]">
          <div className="mx-auto mb-12 w-4/5 md:h-1/6 md:w-4/5 md:mb-auto md:mt-auto md:mx-0 md:pt-16 lg:my-auto lg:pt-12 lg:pl-14">
            <p className="pl-4 text-lg leading-8 text-[#89CFFD] lg:text-2xl md:pl-0">
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
