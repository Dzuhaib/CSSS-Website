import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold font-display text-xl">
                C
              </div>
              <span className="text-xl font-bold font-display tracking-tight">CSSS</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Empowering communities through education, health, and humanitarian support since 2003. Building a brighter future for Somalia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-display text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Projects</Link></li>
              <li><Link href="/resources" className="text-primary-foreground/80 hover:text-accent transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-display text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span>Mogadishu, Somalia</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+252 61 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>info@csss-somalia.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold font-display text-white mb-6">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Subscribe to our newsletter for the latest updates on our projects.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border-none text-white placeholder:text-white/50 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-accent outline-none"
              />
              <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Charitable Society for Students of Sciences. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
