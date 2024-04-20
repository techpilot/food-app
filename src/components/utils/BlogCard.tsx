"use client";

import Image from "next/image";
import forward_arrow from "@/assets/svgs/forward-arrow-icon.svg";
import { useState } from "react";

interface BlogCardProps {
  title?: string;
  date?: string;
  image?: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, image }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="h-[31.5rem] lg:h-[34rem] xl:h-[34rem] shadow-lg relative cursor-pointer rounded-md overflow-hidden"
    >
      <div className="h-[18rem] overflow-hidden">
        <Image
          src={image}
          alt=""
          className={`max-w-full min-w-full max-h-full min-h-full rounded-t-md transition duration-700 ${
            hovered && "transform-rotate"
          }`}
        />
      </div>

      <div className="px-7 py-5 flex flex-col gap-3">
        <p className="text-[#01297099] lg:text-lg font-semibold">{date}</p>
        <p
          className={`text-lg lg:text-xl xl:text-2xl font-semibold transition 
          ease-in-out duration-700 ${
            hovered ? "text-[#4154f1]" : "text-[#012970]"
          }`}
        >
          {title}
        </p>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#4154f1]">Read More</span>
          <Image src={forward_arrow} alt="" className="h-[1.5rem] w-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
