import Image from "next/image"
import contactimage from "@/images/contactimage.png"
import Footer from "./footer"

const ContactSection = () => {
  return (
    <div className="bg-[#311B4D]">
      <div className="flex h-screen flex-col">
        <div className="mx-auto h-[60vh] w-4/5">
          <div className="pb-4 pt-4">
            <h2 className="text-6xl text-[#FFE366]">Contact</h2>
          </div>
          {/*========= DR DEREK AUSTIN IMAGE ========= */}
          <div className="">
            <Image
              src={contactimage}
              alt="Contact Dr Derek Austin"
              object-fit="contain"
            />
            <div className="">
              <p className="w-5/6 pr-4 pt-3 text-lg leading-7 text-[#89CFFD] ">
                Discover the power of versatile frontend developing with Derek
                Austin. Get in touch to discuss your next development project,
                or to simply chat.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ContactSection
