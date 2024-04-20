"use client";

import Image from "next/image";
import { useState } from "react";

interface CategoriesCardProps {
  name?: string;
  category?: string;
  image?: any;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
  name,
  category,
  image,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="h-[20rem] md:h-[18rem] xl:h-[20rem] relative cursor-pointer overflow-hidden"
    >
      <Image
        src={image}
        alt=""
        className={`max-h-full min-h-full max-w-full min-w-full rounded-sm transition duration-1000
        object-cover ${hovered && "scale-110"}`}
      />

      {hovered && (
        <>
          <div
            className="absolute top-0 bottom-0 left-0 right-0 
        bg-white bg-opacity-50 flex flex-col justify-center items-center"
          >
            <p className="text-[#012970] lg:text-lg font-medium">{name}</p>
            <p className="text-[#012970] text-xs lg:text-sm font-medium">
              {category}
            </p>
          </div>

          <div className="absolute top-3 left-3 h-[3rem] w-[3rem] border-l-4 border-t-4 border-gray-300 "></div>
          <div className="absolute bottom-3 right-3 h-[3rem] w-[3rem] border-r-4 border-b-4 border-gray-300 "></div>
        </>
      )}
    </div>
  );
};

export default CategoriesCard;
