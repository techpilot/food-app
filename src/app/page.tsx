import Categories from "@/components/Categories";
import HealthTips from "@/components/HealthTips";
import Packages from "@/components/Packages";

export default function Home() {
  return (
    <main className="flex flex-col gap-[3rem]">
      <Packages />
      <HealthTips />
      <Categories />
    </main>
  );
}
