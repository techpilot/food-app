import Image from "next/image";
import spanish_crabs from "@/assets/images/spanish-crabs.png";
import sorin_popa from "@/assets/images/sorin-popa.png";
import naija_food from "@/assets/images/naija-food.png";
import sea_food from "@/assets/images/sea-food.png";

const Packages = () => {
  return (
    <div className="px-3 md:px-20 py-5 flex flex-col gap-[1rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Check our international Delicacies
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Paella de Marisco
          </p>
          <p className="text-lg lg:text-2xl font-semibold">
            <sup>$</sup>20.00
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={spanish_crabs}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>

          <ul className="list-disc list-outside flex flex-col gap-1">
            <li className="text-[#374255]">
              <span className="text-xs lg:text-sm font-medium">
                Take your tastebuds to Spain
              </span>
            </li>
            <li className="text-[#374255]">
              <span className="text-xs lg:text-sm font-medium">
                Experience culinary innovations
              </span>
            </li>
          </ul>

          <button
            className="w-[8rem] min-w-max px-3 py-2 border border-[#4154f1] text-[#4154f1] 
          text-xs lg:text-sm rounded-3xl hover:bg-[#4154f1] hover:text-white transition 
          ease-in-out duration-700"
          >
            Order Now
          </button>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Sorin Popa
          </p>
          <p className="text-lg lg:text-2xl font-semibold">
            <sup>$</sup>15.00
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={sorin_popa}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>

          <ul className="list-disc list-outside flex flex-col gap-1">
            <li className="text-[#374255]">
              <span className="text-xs lg:text-sm font-medium">
                Take your tastebuds to Italy
              </span>
            </li>
            <li className="text-[#374255]">
              <span className="text-[#374255] text-xs lg:text-sm font-medium">
                Talk of quality, talk of Sorin
              </span>
            </li>
          </ul>

          <button
            className="w-[8rem] min-w-max px-3 py-2 border border-[#4154f1] text-[#4154f1] 
          text-xs lg:text-sm rounded-3xl hover:bg-[#4154f1] hover:text-white transition 
          ease-in-out duration-700"
          >
            Order Now
          </button>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Nkwobi
          </p>
          <p className="text-lg lg:text-2xl font-semibold">
            <sup>$</sup>35.00
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={naija_food}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>

          <ul className="list-disc list-outside flex flex-col gap-1">
            <li className="text-[#374255]">
              <span className="text-xs lg:text-sm font-medium">
                Take your tastebuds to Nigeria
              </span>
            </li>
            <li className="text-[#374255]">
              <span className="text-[#374255] text-xs lg:text-sm font-medium">
                Talk of culture, talk Africa
              </span>
            </li>
          </ul>

          <button
            className="w-[8rem] min-w-max px-3 py-2 border border-[#4154f1] text-[#4154f1] 
          text-xs lg:text-sm rounded-3xl hover:bg-[#4154f1] hover:text-white transition 
          ease-in-out duration-700"
          >
            Order Now
          </button>
        </div>

        <div
          className="bg-white shadow-lg h-[33rem] rounded-sm px-[2.5rem] py-[3rem] flex flex-col 
        justify-between items-center gap-3 hover:scale-110 transition duration-500"
        >
          <p className="text-[#07d5c0] text-sm lg:text-base font-semibold">
            Shrimp
          </p>
          <p className="text-lg lg:text-2xl font-semibold">
            <sup>$</sup>10.00
          </p>

          <div className="h-[10rem] w-[10rem]">
            <Image
              src={sea_food}
              alt=""
              className="max-h-full max-w-full min-h-full min-w-full object-contain rounded-md"
            />
          </div>

          <ul className="list-disc list-outside flex flex-col gap-1">
            <li className="text-[#374255]">
              <span className="text-xs lg:text-sm font-medium">
                Take your tastebuds to Spain
              </span>
            </li>
            <li className="text-[#374255]">
              <span className="text-[#374255] text-xs lg:text-sm font-medium">
                The wealthy sea food
              </span>
            </li>
          </ul>

          <button
            className="w-[8rem] min-w-max px-3 py-2 border border-[#4154f1] text-[#4154f1] 
          text-xs lg:text-sm rounded-3xl hover:bg-[#4154f1] hover:text-white transition 
          ease-in-out duration-700"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
