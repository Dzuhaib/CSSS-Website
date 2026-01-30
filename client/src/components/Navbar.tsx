import { Link, useLocation } from "wouter";
import { Menu, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl shadow-lg border-b border-white/20 py-3" 
          : "bg-gradient-to-b from-black/40 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold font-display text-xl shadow-lg transition-all duration-300 group-hover:scale-105 ${
            isScrolled 
              ? "bg-primary text-white" 
              : "bg-white/95 text-primary backdrop-blur-sm"
          }`}>
            C
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-bold font-display tracking-tight leading-none transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              CSSS
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors duration-300 ${
              isScrolled ? "text-muted-foreground" : "text-white/70"
            }`}>
              Since 2003
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.href.replace("/", "") || "home"}`}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full relative group ${
                location === link.href
                  ? isScrolled 
                    ? "text-primary bg-primary/5" 
                    : "text-white bg-white/15"
                  : isScrolled
                    ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    : "text-white/85 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
              {location === link.href && (
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                  isScrolled ? "bg-accent" : "bg-white"
                }`} />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button 
            data-testid="button-donate-nav"
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            onClick={() => window.location.href = "/contact"}
          >
            <Heart className="w-4 h-4 mr-2 fill-current" />
            Support Our Cause
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              data-testid="button-mobile-menu"
              className={`lg:hidden ${isScrolled ? "text-primary" : "text-white"}`}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-white/95 backdrop-blur-2xl border-l border-border/50">
            <div className="flex flex-col gap-2 mt-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-display py-3 px-4 rounded-xl transition-all duration-300 ${
                    location === link.href 
                      ? "text-primary bg-primary/5 font-semibold" 
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-border">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-6 text-base font-semibold shadow-lg"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "/contact";
                  }}
                >
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Support Our Cause
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
