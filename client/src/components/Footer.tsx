import { Link } from "wouter";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary font-bold font-display text-2xl shadow-lg">
                C
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight block">CSSS</span>
                <span className="text-xs text-white/60 uppercase tracking-widest">Since 2003</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              The Charitable Society for Students of Sciences is a nonprofit humanitarian organization dedicated to education, health, and community development in Somalia.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/partner", label: "Partner with Us" },
                { href: "/volunteer", label: "Volunteer" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {[
                { href: "/education", label: "Education" },
                { href: "/health", label: "Health" },
                { href: "/development", label: "Development" },
                { href: "/humanitarian", label: "Humanitarian & Emergency" },
                { href: "/advocacy", label: "Advocacy" },
                { href: "/science-outreach", label: "Science Outreach" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors text-sm inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">Maka Al-Mukarama Street<br />Mogadishu, Somalia</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <a href="mailto:info@csss-somalia.org" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@csss-somalia.org
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <a href="tel:+252611234567" className="text-white/70 hover:text-white transition-colors text-sm">
                  +252 61 123 4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/donation-options" 
                className="inline-block bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Charitable Society for Students of Sciences. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Made by Zuhaib
          </p>
        </div>
      </div>
    </footer>
  );
}
