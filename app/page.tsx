import HeroSection from "@/components/home/hero-section";
import FeaturedRoasts from "@/components/home/featured-roasts";
import BeanPath from "@/components/home/bean-path";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedRoasts />
      <BeanPath />
    </main>
  );
}
