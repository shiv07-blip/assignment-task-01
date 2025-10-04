import { useState } from "react";
import RecommendationCard from "./RecommendationCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import swingView from "@/assets/swing-view.jpg";
import viewpoint from "@/assets/viewpoint.jpg";
import kayak from "@/assets/kayak.jpg";
import fishingVillage from "@/assets/fishing-village.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const recommendations = [
  { image: swingView, title: "Swing with amazing views", category: "Sightseeing", description: "Experience breathtaking panoramic views" },
  { image: viewpoint, title: "Beautiful view point", category: "Hike", description: "A scenic hiking destination" },
  { image: kayak, title: "Kayak is a must", category: "Activity", description: "Paddle through stunning fjords" },
  { image: fishingVillage, title: "Walk around a beautiful old fishing town", category: "Sightseeing", description: "Explore historic coastal charm" },
  { image: swingView, title: "Mountain Peak Adventure", category: "Hike", description: "Challenge yourself with this peak" },
  { image: viewpoint, title: "Coastal Walk", category: "Sightseeing", description: "Stroll along the beautiful coastline" },
  { image: kayak, title: "Fishing Experience", category: "Activity", description: "Try traditional Norwegian fishing" },
  { image: fishingVillage, title: "Northern Lights Spot", category: "Sightseeing", description: "Best place to see Aurora Borealis" },
];

const categories = ["All", "Sightseeing", "Hike", "Activity"];

const TopRecommendations = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");

  const filteredRecommendations = selectedCategory === "All" 
    ? recommendations 
    : recommendations.filter(rec => rec.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            161 things to do
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a curated list of all the best things to do with exact location, detailed info and inspiring content
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
            size="sm"
          >
            Grid
          </Button>
          <Button 
            variant={viewMode === "carousel" ? "default" : "outline"}
            onClick={() => setViewMode("carousel")}
            size="sm"
          >
            Carousel
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-fade-in">
          {filteredRecommendations.map((rec, index) => (
            <RecommendationCard key={index} {...rec} />
          ))}
        </div>
      ) : (
        <div className="mb-8 animate-fade-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredRecommendations.map((rec, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <RecommendationCard {...rec} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      )}

      <div className="flex justify-center">
        <Button variant="outline" size="lg" className="hover-scale">
          Preview All {filteredRecommendations.length} Recommendations
        </Button>
      </div>
    </section>
  );
};

export default TopRecommendations;
