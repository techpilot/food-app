import SectionsCard from "./utils/SectionsCard";
import eatery_img from "@/assets/images/eatery.jpg";
import bar_img from "@/assets/images/bar.jpg";
import coffee_img from "@/assets/images/coffee-shop.jpg";
import chef_img from "@/assets/images/chef.jpg";

const list = [
  {
    name: "Restaurants",
    description:
      "Craving unique dish type? We serve up delicious cuisines made fresh daily! Friendly atmosphere, perfect for dining occasion. Visit us today!",
    image: eatery_img,
  },
  {
    name: "Bar",
    description:
      "Craft cocktails & cozy vibes await!  Our friendly bar boasts unique drinks, delicious bites, and a perfect atmosphere to unwind or celebrate",
    image: bar_img,
  },
  {
    name: "Coffee Shop",
    description:
      "Crave handcrafted coffee & cozy vibes? Our shop brews magic! Aromatic beans, delectable pastries, and a warm atmosphere await. Unwind & recharge here. ",
    image: coffee_img,
  },
  {
    name: "Cooks",
    description:
      "Passionate chefs create flavorful dishes that'll tantalize your taste buds. We bring experience & creativity to every plate. Hire us for an unforgettable culinary experience!",
    image: chef_img,
  },
];

const Sections = () => {
  return (
    <div className="px-3 md:px-20 py-3 flex flex-col gap-[1rem] mb-[5rem]">
      <p className="uppercase text-center text-xs md:text-sm font-medium text-[#4154f1]">
        Sections
      </p>
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        We care for your overall well being
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem] mt-[2rem]">
        {list?.map((item, idx) => (
          <SectionsCard
            key={idx}
            name={item.name}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Sections;
