import { Star } from "lucide-react";
import RecommendationCard from "./RecommendationCard";
import swingView from "@/assets/swing-view.jpg";
import viewpoint from "@/assets/viewpoint.jpg";
import kayak from "@/assets/kayak.jpg";
import fishingVillage from "@/assets/fishing-village.jpg";

const topRecommendations = [
  { 
    image: swingView, 
    title: "Swing with amazing views", 
    category: "Sightseeing", 
    description: "Experience breathtaking panoramic views",
    rating: 5.0 
  },
  { 
    image: viewpoint, 
    title: "Beautiful view point", 
    category: "Hike", 
    description: "A scenic hiking destination",
    rating: 4.9 
  },
  { 
    image: kayak, 
    title: "Kayak is a must", 
    category: "Activity", 
    description: "Paddle through stunning fjords",
    rating: 4.8 
  },
  { 
    image: fishingVillage, 
    title: "Walk around a beautiful old fishing town", 
    category: "Sightseeing", 
    description: "Explore historic coastal charm",
    rating: 4.9 
  },
];

const FeaturedRecommendations = () => {
  return (
    <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Star className="w-6 h-6 fill-primary text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Top Recommendations
          </h2>
          <Star className="w-6 h-6 fill-primary text-primary" />
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't miss these highly-rated experiences handpicked by our community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {topRecommendations.map((rec, index) => (
          <div key={index} className="relative">
            <RecommendationCard {...rec} />
            <div className="absolute top-6 left-6 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold text-sm flex items-center gap-1 shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              {rec.rating}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecommendations;
