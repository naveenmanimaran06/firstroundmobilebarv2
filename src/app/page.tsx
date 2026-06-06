import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DrinkShowcaseSection from "@/components/DrinkShowcaseSection";
import MocktailsSection from "@/components/MocktailsSection";
import DetailsSection from "@/components/DetailsSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DrinkShowcaseSection />
      <MocktailsSection />
      <DetailsSection />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <BookingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
