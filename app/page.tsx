import HeroSection from "@/components/home/hero-section";
import FeaturedRoasts from "@/components/home/featured-roasts";
import BeanPath from "@/components/home/bean-path";
import BrewGuides from "@/components/home/brew-guides";
import CTA from "@/components/home/CTA";
import Location from "@/components/home/location";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedRoasts />
      <BeanPath />
      <BrewGuides />
      <CTA />
      <Location />
    </main>
  );
}
