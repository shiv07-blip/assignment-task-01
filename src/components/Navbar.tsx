import { Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">R</span>
            </div>
            <span>Rexby</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="outline">Log in</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
