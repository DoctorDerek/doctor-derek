import Image from "next/image"
import contactimage from "@/images/contactimage.png"
import Footer from "./footer"

const ContactSection = () => {
  return (
    <div className="purple-bg-img bg-[#311B4D]">
      <div className="flex h-screen flex-col md:flex-row">
        <div className="mx-auto w-4/5 md:w-[45%] md:flex md:flex-col md:pl-8">
          <div className="py-4 md:mt-auto md:mb-10">
            <h2 className="text-7xl text-[#FFE366] md:text-8xl">Contact</h2>
          </div>
          {/*========= DR DEREK AUSTIN IMAGE ========= */}
          <div className="md:mb-auto">
            <Image
              src={contactimage}
              alt="Contact Dr Derek Austin"
              className="w-2/3 md:w-full md:mb-32"
            />
          </div>
        </div>

        <div className="mx-auto mt-auto flex flex-col md:h-full md:w-[55%]">
          <div className="mx-auto mb-12 w-4/5 md:h-1/6 md:w-4/5 md:mt-[45%] md:mb-0 ">
            <p className="pr-4 text-lg leading-7 text-[#89CFFD]">
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
