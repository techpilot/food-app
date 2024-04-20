import Image from "next/image";
import location_icon from "@/assets/svgs/location-icon.svg";
import call_icon from "@/assets/svgs/call-icon.svg";
import email_icon from "@/assets/svgs/email-icon.svg";
import time_icon from "@/assets/svgs/time-icon.svg";

const Contact = () => {
  return (
    <div className="px-3 md:px-20 md:py-[2rem] flex flex-col gap-[2rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Contact Us
      </p>
      <div className="h-[26rem] flex flex-col lg:flex-row items-center justify-between gap-5">
        <div className="w-full h-full flex flex-col gap-5">
          <div className="h-[50%] flex justify-between gap-5">
            <div className="h-full w-[50%] bg-[#fafbff] rounded-md p-7 flex flex-col gap-2 justify-around">
              <Image src={location_icon} alt="" className="h-[3rem]" />
              <p className="font-semibold lg:text-xl text-[#444444]">Address</p>
              <p className="text-xs lg:text-sm">
                A108 Adam Street, <br />
                New York, NY 535022
              </p>
            </div>
            <div className="h-full w-[50%] bg-[#fafbff] rounded-md p-7 flex flex-col gap-2 justify-around">
              <Image src={call_icon} alt="" className="h-[3.5rem]" />
              <p className="font-semibold lg:text-xl text-[#444444]">Call</p>
              <p className="text-xs lg:text-sm">
                +1 5589 55488 55 <br />
                +1 6678 254445 41
              </p>
            </div>
          </div>
          <div className="h-[50%] flex justify-between gap-5">
            <div className="h-full w-[50%] bg-[#fafbff] rounded-md p-7 flex flex-col gap-2 justify-around">
              <Image src={email_icon} alt="" className="h-[3rem]" />
              <p className="font-semibold lg:text-xl text-[#444444]">Email</p>
              <p className="text-xs lg:text-sm">
                info@example.com
                <br /> contact@example.com
              </p>
            </div>
            <div className="h-full w-[50%] bg-[#fafbff] rounded-md p-7 flex flex-col gap-2 justify-around">
              <Image src={time_icon} alt="" className="h-[3rem]" />
              <p className="font-semibold lg:text-xl text-[#444444]">
                Open Hours
              </p>
              <p className="text-xs lg:text-sm">
                Monday - Friday <br />
                9:00AM - 05:00PM
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#fafbff] py-8 px-7 flex flex-col gap-6">
          <div className="flex gap-4 items-center justify-between">
            <input
              placeholder="Your Name"
              className="bg-white border border-gray-200 rounded-sm px-2 py-1 w-[50%] h-[3rem] text-sm"
            />

            <input
              placeholder="Your Email"
              className="bg-white border border-gray-200 rounded-sm px-2 py-1 w-[50%] h-[3rem] text-sm"
            />
          </div>
          <input
            placeholder="Subject"
            className="bg-white border border-gray-200 rounded-sm px-2 py-1 w-full h-[3rem] text-sm"
          />

          <textarea
            placeholder="Message"
            className="bg-white border border-gray-200 rounded-sm px-2 py-1 w-full h-[10rem] text-sm"
          />

          <button className="bg-[#012970] text-white font-semibold text-sm rounded-md min-w-max w-[10rem] h-[3rem] py-2 px-4 mx-auto">
            Submit Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
