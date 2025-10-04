const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Rexby</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Start exploring
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Become a travel creator
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Travel Creators
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Purchases
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Messages
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Rexby. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
