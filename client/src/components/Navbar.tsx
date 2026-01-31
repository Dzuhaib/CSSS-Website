import { Link, useLocation } from "wouter";
import { Menu, Heart, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

interface NavItem {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
}

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { 
    href: "#programs", 
    label: "Programs",
    children: [
      { href: "/education", label: "Education" },
      { href: "/health", label: "Health" },
      { href: "/development", label: "Development" },
      { href: "/humanitarian", label: "Humanitarian & Emergency" },
    ]
  },
  {
    href: "#outreach",
    label: "Outreach",
    children: [
      { href: "/advocacy", label: "Advocacy" },
      { href: "/science-outreach", label: "Science Outreach" },
    ]
  },
  {
    href: "#get-involved",
    label: "Get Involved",
    children: [
      { href: "/partner", label: "Partner with Us" },
      { href: "/volunteer", label: "Volunteer" },
      { href: "/careers", label: "Careers" },
    ]
  },
  {
    href: "#donate",
    label: "Donate",
    children: [
      { href: "/donation-options", label: "Donation Options" },
      { href: "/why-donate", label: "Why Donate?" },
      { href: "/donor-recognition", label: "Donor Recognition" },
      { href: "/source-of-funds", label: "Source of Funds" },
    ]
  },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({ 
  item, 
  isScrolled, 
  location 
}: { 
  item: NavItem; 
  isScrolled: boolean; 
  location: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  const isActive = item.children?.some(child => location === child.href);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center gap-1 ${
          isActive
            ? isScrolled 
              ? "text-primary bg-primary/5" 
              : "text-white bg-white/15"
            : isScrolled
              ? "text-foreground/80 hover:text-primary hover:bg-primary/5"
              : "text-white/85 hover:text-white hover:bg-white/10"
        }`}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <div 
        className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-border/50 overflow-hidden transition-all duration-200 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            className={`block px-4 py-3 text-sm transition-colors ${
              location === child.href
                ? "bg-primary/5 text-primary font-medium"
                : "text-foreground/80 hover:bg-muted/50 hover:text-primary"
            }`}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobile(expandedMobile === label ? null : label);
  };

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
        <div className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            link.children ? (
              <DropdownMenu 
                key={link.label} 
                item={link} 
                isScrolled={isScrolled} 
                location={location} 
              />
            ) : (
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
            )
          ))}
        </div>

        <div className="hidden xl:block">
          <Button 
            data-testid="button-donate-nav"
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-semibold"
            onClick={() => window.location.href = "/donation-options"}
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
              className={`xl:hidden ${isScrolled ? "text-primary" : "text-white"}`}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[380px] bg-white/95 backdrop-blur-2xl border-l border-border/50 overflow-y-auto">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col gap-1 mt-12">
              {NAV_LINKS.map((link) => (
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => toggleMobileSubmenu(link.label)}
                      className={`w-full text-lg font-display py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                        expandedMobile === link.label
                          ? "text-primary bg-primary/5 font-semibold"
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                        expandedMobile === link.label ? "rotate-180" : ""
                      }`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      expandedMobile === link.label ? "max-h-96" : "max-h-0"
                    }`}>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`block py-2.5 pl-8 pr-4 text-base transition-colors ${
                            location === child.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
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
                )
              ))}
              <div className="mt-6 pt-6 border-t border-border">
                <Button 
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full py-6 text-base font-semibold shadow-lg"
                  onClick={() => {
                    setIsOpen(false);
                    window.location.href = "/donation-options";
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
