import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-norway.jpg";
import authorAvatar from "@/assets/author-avatar.jpg";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-8 mt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={heroImage} 
            alt="Norway landscape with hammock" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Norway Guide
          </h1>
          
          <div className="flex items-center gap-3">
            <img 
              src={authorAvatar} 
              alt="Ása Steinars" 
              className="w-12 h-12 rounded-full object-cover border-2 border-border"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Guide by Ása Steinars</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-foreground">Norway</span>
              <Badge variant="secondary" className="gap-1">
                <Star className="h-3 w-3 fill-current" />
                New
              </Badge>
            </div>
          </div>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Norway is my second home. I was born in Norway and I lived there until I was 7 years old. 
              I often come back and I love this country almost as much as Iceland. Last summer I spent 3 months 
              on the road with my van exploring everything from the south tip up to Lofoten.
            </p>
            <p>
              This guide is my best tips for Norway to make sure you get the most out of your trip. 
              It's focused around the fjords in the west and Lofoten in the north. In my opinion, 
              it's the best areas to explore in Norway.
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <Button variant="outline" size="lg" className="flex-1 md:flex-none">
              Preview
            </Button>
            <Button size="lg" className="flex-1 md:flex-none">
              Get Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
