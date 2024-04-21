import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HealthTips from "@/components/HealthTips";
import Packages from "@/components/Packages";
import Sections from "@/components/Sections";
import SwiperContaier from "@/components/utils/Swiper";

export default function Home() {
  return (
    <main className="flex flex-col gap-[1rem]">
      <Packages />
      <HealthTips />
      <Categories />
      <SwiperContaier />
      <Sections />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
