"use client";

import { useState } from "react";
import CategoriesCard from "./utils/CategoriesCard";
import sorin_img from "@/assets/images/sorin.jpg";
import nkwobi_img from "@/assets/images/naija-img.jpg";
import scrabs_img from "@/assets/images/spanish-crabs.jpg";
import coffee_img from "@/assets/images/coffee.jpg";
import lily_img from "@/assets/images/lily-banse.jpg";

const list = [
  { name: "Paella de Marisco", category: "Dish", image: sorin_img },
  { name: "Nkwobi", category: "Dish", image: nkwobi_img },
  { name: "Coffee Patel", category: "Coffee", image: sorin_img },
  { name: "Sorin", category: "Dish", image: scrabs_img },
  { name: "Coffee", category: "Coffee", image: coffee_img },
  { name: "Pasta", category: "Dish", image: lily_img },
];

const Categories = () => {
  const [selectedOption, setSelectedOption] = useState("all");

  const handleCategoryFilter = (value: string) => {
    console.log(value);
    if (value === "all") {
      return list;
    } else {
      return list.filter((item) => item.category.toLowerCase() === value);
    }
  };

  return (
    <div className="px-3 md:px-20 py-3 flex flex-col gap-[1rem] mb-[5rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize mt-[1rem]">
        Explore different categories of our culinaries
      </p>

      <div className="flex gap-3 justify-center items-center">
        <p
          onClick={() => setSelectedOption("all")}
          className={`py-1 px-5 rounded-3xl border hover:border-[#4154f1] hover:text-[#4154f1] 
          text-xs lg:text-sm font-semibold cursor-pointer ${
            selectedOption === "all"
              ? "border border-[#4154f1] text-[#4154f1]"
              : "text-[#444444] border-white"
          }`}
        >
          All
        </p>
        <p
          onClick={() => setSelectedOption("dish")}
          className={`py-1 px-5 rounded-3xl border hover:border-[#4154f1] hover:text-[#4154f1] 
          text-xs lg:text-sm font-semibold cursor-pointer ${
            selectedOption === "dish"
              ? "border border-[#4154f1] text-[#4154f1]"
              : "text-[#444444] border-white"
          }`}
        >
          Dishes
        </p>
        <p
          onClick={() => setSelectedOption("coffee")}
          className={`py-1 px-5 rounded-3xl border hover:border-[#4154f1] hover:text-[#4154f1] 
          text-xs lg:text-sm font-semibold cursor-pointer ${
            selectedOption === "coffee"
              ? "border-[#4154f1] text-[#4154f1]"
              : "text-[#444444] border-white"
          }`}
        >
          Coffee
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[2rem]">
        {handleCategoryFilter(selectedOption)?.map((item, idx) => (
          <CategoriesCard
            key={idx}
            name={item.name}
            category={item.category}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
