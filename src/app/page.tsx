import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonal from "@/components/TestimonalCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonal />
      <UpcomingWebinars />
      <Instructors />
     
    </main>
  );
}
