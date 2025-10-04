import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveMap from "@/components/InteractiveMap";
import FeaturedRecommendations from "@/components/FeaturedRecommendations";
import TopRecommendations from "@/components/TopRecommendations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <InteractiveMap />
      <FeaturedRecommendations />
      <TopRecommendations />
      <Footer />
    </div>
  );
};

export default Index;
