import BlogCard from "./utils/BlogCard";
import chef_img from "@/assets/images/chef.jpg";
import spanish_img from "@/assets/images/spanish-crabs.jpg";
import eatery_img from "@/assets/images/eatery.jpg";

const blogs = [
  {
    title:
      "Global Street Food Adventures: Explore the world through the lens of delicious street food!",
    date: "Tue, April 15",
    image: chef_img,
  },
  {
    title:
      "Budget-Friendly Feasts: It features creative recipe hacks, affordable meal prep ideas",
    date: "Fri, March 20",
    image: spanish_img,
  },
  {
    title:
      "Plant-Based Powerhouse: It features innovative vegetable recipes, guides to plant-based proteins",
    date: "Wed, February 14",
    image: eatery_img,
  },
];

const Blog = () => {
  return (
    <div className="px-3 md:px-20 py-3 flex flex-col gap-[1rem] mb-[5rem]">
      <p className="text-center text-xl lg:text-3xl font-semibold text-[#012970] capitalize">
        Recent posts from our Blog
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[2rem]">
        {blogs?.map((blog, idx) => (
          <BlogCard
            key={idx}
            title={blog.title}
            date={blog.date}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
