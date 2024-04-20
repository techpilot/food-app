import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import HealthTips from "@/components/HealthTips";
import Packages from "@/components/Packages";
import Sections from "@/components/Sections";

export default function Home() {
  return (
    <main className="flex flex-col gap-[3rem]">
      <Packages />
      <HealthTips />
      <Categories />
      <Sections />
      <Blog />
      <Contact />
    </main>
  );
}
