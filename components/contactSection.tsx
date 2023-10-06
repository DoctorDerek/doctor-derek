import Image from "next/image"
import contactimage from "@/images/contactimage.png"
import Footer from "./footer"

const ContactSection = () => {
  return (
    <div className="bg-[#311B4D]">
      <div className="flex h-screen flex-col">
        <div className="mx-auto w-4/5">
          <div className="py-4">
            <h2 className="text-7xl text-[#FFE366]">Contact</h2>
          </div>
          {/*========= DR DEREK AUSTIN IMAGE ========= */}
          <div className="">
            <Image
              src={contactimage}
              alt="Contact Dr Derek Austin"
              className="w-2/3"
            />
          </div>
        </div>

        <div className="w-4/5 mx-auto mt-10">
          <p className="pr-4 text-lg leading-7 text-[#89CFFD]">
            Discover the power of versatile frontend developing with Derek
            Austin. Get in touch to discuss your next development project, or to
            simply chat.
          </p>
        </div>
        {/* ======Footer ======== */}
        <Footer />
      </div>
    </div>
  )
}

export default ContactSection
