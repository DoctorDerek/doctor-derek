import Image from "next/image"
import contactimage from "@/images/contactimage.png"

const ContactSection = () => {
  return (
    <div className="h-screen bg-[#311B4D]">
      <div className="w-4/5 mx-auto">
        <div className="pt-4 pb-4">
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
            <p className="pt-3 pr-4 leading-7 text-[#89CFFD] text-lg w-5/6 ">
              Discover the power of versatile frontend developing with Derek
              Austin. Get in touch to discuss your next development project, or
              to simply chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection