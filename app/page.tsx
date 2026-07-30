import HeroSection from "@/components/home/hero-section";
import FeaturedRoasts from "@/components/home/featured-roasts";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedRoasts />
    </main>
  );
}
