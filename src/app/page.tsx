import FeaturedItems from "@/components/FeaturedItems";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructore from "@/components/Instructore";
import TestnomialCard from "@/components/TestnomialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedItems/>
      <WhyChooseUs/>
      <TestnomialCard/>
      <UpcomingWebinars/>
      <Instructore/>
      <Footer/>
    </main>
  );
}
