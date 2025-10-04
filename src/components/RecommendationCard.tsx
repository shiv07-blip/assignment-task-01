import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart } from "lucide-react";

interface RecommendationCardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
}

const RecommendationCard = ({ image, title, category, description }: RecommendationCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300" />
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              isLiked ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300">
          <Badge 
            variant="secondary" 
            className="mb-3 bg-white/20 text-white backdrop-blur-sm border-white/30 transition-all duration-300 group-hover:bg-white/30"
          >
            {category}
          </Badge>
          <h3 className="text-xl font-semibold mb-2 transition-all duration-300 group-hover:text-primary-foreground">
            {title}
          </h3>
          {description && (
            <p className={`text-sm text-white/90 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}>
              {description}
            </p>
          )}
          <div className={`flex items-center gap-1 mt-2 text-xs text-white/80 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}>
            <MapPin className="w-3 h-3" />
            <span>Norway</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
