import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold font-display text-xl shadow-lg">
            C
          </div>
          <span className={`text-xl font-bold font-display tracking-tight ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
            CSSS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent relative group ${
                location === link.href
                  ? "text-accent font-semibold"
                  : isScrolled
                    ? "text-foreground"
                    : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full ${location === link.href ? "w-full" : ""}`} />
            </Link>
          ))}
          <Button 
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            onClick={() => window.location.href = "/contact"}
          >
            <Heart className="w-4 h-4 mr-2 fill-current" />
            Donate Now
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-primary">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-display font-medium transition-colors ${
                    location === link.href ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-accent hover:bg-accent/90 text-white rounded-full mt-4"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "/contact";
                }}
              >
                Donate Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
