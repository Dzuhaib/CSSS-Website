import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Droplets, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

const STATS = [
  { label: "Years of Impact", value: "20+", icon: Heart },
  { label: "Communities Served", value: "50+", icon: Users },
  { label: "Students Supported", value: "10k+", icon: BookOpen },
  { label: "Water Wells Built", value: "100+", icon: Droplets },
];

const AREAS = [
  {
    title: "Education",
    desc: "Building schools, providing scholarships, and creating learning environments for the next generation.",
    image: "/images/children-school.jpg",
    link: "/projects"
  },
  {
    title: "Healthcare",
    desc: "Delivering essential medical services, health campaigns, and emergency care to underserved areas.",
    image: "/images/health-campaign.jpg",
    link: "/projects"
  },
  {
    title: "Water & Hygiene",
    desc: "Ensuring access to clean water through wells and promoting sanitation in rural communities.",
    image: "/images/water-distribution.jpg",
    link: "/projects"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 mix-blend-multiply z-10" />
          <img 
            src="/images/children-school.jpg" 
            alt="Students learning" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-4 block">
              Founded in 2003
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Empowering Communities,<br /> Building Futures.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl font-light leading-relaxed">
              The Charitable Society for Students of Sciences (CSSS) is dedicated to education, health, and humanitarian support across Somalia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="rounded-full px-8 text-lg bg-white text-primary hover:bg-white/90">
                  Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <Section className="bg-primary text-white py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Intro Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <img 
              src="/images/group-photo.jpg" 
              alt="Our Team" 
              className="rounded-2xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6 text-primary">A Legacy of Care</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Established in Mogadishu in 2003, CSSS was born from a vision to uplift communities through sustainable development. We believe that education is the foundation of progress, and health is the pillar of a thriving society.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our multifaceted approach addresses immediate humanitarian needs while investing in long-term infrastructure like schools, wells, and clinics.
            </p>
            <Link href="/about">
              <Button variant="link" className="text-primary p-0 h-auto text-lg font-semibold group">
                Read our full story <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Featured Areas */}
      <Section background="muted">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">What We Do</span>
          <h2 className="text-4xl font-display font-bold text-primary">Our Core Pillars</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors z-10" />
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 font-display">{area.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {area.desc}
                </p>
                <Link href={area.link}>
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0">
          <img 
            src="/images/aid-distribution.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Make a Difference Today</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Your support enables us to continue our vital work in education, healthcare, and humanitarian relief. Join us in building a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-6 text-lg shadow-xl">
                Donate Now
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-10 py-6 text-lg">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
