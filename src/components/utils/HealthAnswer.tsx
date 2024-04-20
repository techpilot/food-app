"use client";

import Image from "next/image";
import { useState } from "react";
import dropdown_icon from "@/assets/svgs/dropdown-icon.svg";
import uparrow_icon from "@/assets/svgs/uparrow-icon.svg";

interface HealthAnswerProps {
  tip?: any;
}

const HealthAnswer: React.FC<HealthAnswerProps> = ({ tip }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center gap-3 cursor-pointer"
      >
        <span
          className={`text-sm lg:text-base ${
            isOpen ? "text-[#4154f1]" : "text-black"
          }`}
        >
          {tip?.title}
        </span>
        {!isOpen && (
          <Image
            src={dropdown_icon}
            alt=""
            className="w-[1.5rem] transition 
          ease-in-out duration-1000"
          />
        )}
        {isOpen && (
          <Image
            src={uparrow_icon}
            alt=""
            className="w-[0.9rem] transition 
          ease-in-out duration-1000"
          />
        )}
      </div>

      {isOpen && <p className="text-xs lg:text-sm mt-2">{tip?.answer}</p>}
    </div>
  );
};

export default HealthAnswer;
