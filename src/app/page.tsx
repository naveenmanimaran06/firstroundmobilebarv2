import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import DrinkShowcaseSection from "@/components/DrinkShowcaseSection";
import DetailsSection from "@/components/DetailsSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DrinkShowcaseSection />
      <DetailsSection />
      <ReviewsSection />
      <BookingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
