import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Get in Touch" 
        description="We'd love to hear from you. Reach out to collaborate, donate, or learn more."
        image="/images/water-distribution.jpg"
      />

      <Section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Contact Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">We're Here to Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have a question about our projects, want to partner with us, or are looking for support, our team is here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-3 font-display">Headquarters</h3>
              <p className="text-muted-foreground leading-relaxed">
                Maka Al-Mukarama Street<br />
                Mogadishu, Somalia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-3 font-display">Phone</h3>
              <p className="text-muted-foreground leading-relaxed">
                +252 61 123 4567<br />
                +252 61 765 4321
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-3 font-display">Email</h3>
              <p className="text-muted-foreground leading-relaxed">
                <a href="mailto:info@csss-somalia.org" className="hover:text-primary transition-colors">info@csss-somalia.org</a><br />
                <a href="mailto:partnerships@csss-somalia.org" className="hover:text-primary transition-colors">partnerships@csss-somalia.org</a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-primary mb-3 font-display">Office Hours</h3>
              <p className="text-muted-foreground leading-relaxed">
                Saturday - Thursday: 8:00 AM - 4:00 PM<br />
                Friday: Closed
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="font-bold text-xl text-primary mb-6 font-display">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
