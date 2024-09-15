import Image from "next/image";
import Ashok_chakra from "@/public/images/ashok chakra.png";

export default function OurLegacy() {
  return (
    <>
      <div className=" pt-5 w-9/12 text-end">
        <i className=" text-8xl font-Italianno text-gray-400">sevaarth</i>
      </div>

      <div className="flex items-center pb-16  px-[13%]">
        <div className="container mx-auto  ">
          <h1 className="text-5xl  pl-[2%]">ABOUT US</h1>
          <p className="text-xl  text-gray-700 mt-8 leading-relaxed">
            Sevaarth is a dedicated initiative that aims to provide essential
            support to elderly individuals within the community who are facing
            financial hardships. This project focuses on delivering basic
            household groceries and other necessary items to ensure that these
            seniors can maintain a decent standard of living. By addressing
            their immediate needs, Sevaarth seeks to enhance the quality of life
            for elderly individuals who may otherwise struggle to access these
            vital resources.
          </p>
        </div>
        <div className="">
          <Image src={Ashok_chakra} alt="Ashok_chakra" />
        </div>
      </div>
    </>
  );
}
