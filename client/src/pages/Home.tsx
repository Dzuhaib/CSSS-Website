import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, Droplets, BookOpen, Stethoscope, Wheat, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { HeroSlider } from "@/components/HeroSlider";

const STATS = [
  { label: "Years of Impact", value: "20+", icon: Heart },
  { label: "Communities Served", value: "50+", icon: Users },
  { label: "Students Supported", value: "10k+", icon: BookOpen },
  { label: "Water Wells Built", value: "100+", icon: Droplets },
];

const FOCUS_AREAS = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "We provide educational opportunities and resources to ensure access to quality education for all.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Droplets,
    title: "Water, Sanitation & Hygiene",
    desc: "Our efforts aim to improve access to clean water and sanitation facilities and promote better hygiene practices.",
    color: "from-cyan-500/20 to-cyan-600/10",
  },
  {
    icon: Wheat,
    title: "Food Security",
    desc: "We work to enhance food security and foster economic growth to ensure sustainable livelihoods.",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: Heart,
    title: "Orphan & Child Care",
    desc: "We offer care and support for orphans and vulnerable children, ensuring their well-being and development.",
    color: "from-rose-500/20 to-rose-600/10",
  },
  {
    icon: Users,
    title: "Youth & Women Empowerment",
    desc: "We empower youth and women through various programs, helping them gain skills and opportunities.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Shield,
    title: "Peace-building & Governance",
    desc: "We promote peace-building initiatives, conflict resolution, and good governance practices.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Education Programs",
    desc: "Building schools, providing scholarships, and creating learning environments for the next generation.",
    image: "/images/children-school.jpg",
    link: "/projects"
  },
  {
    title: "Healthcare Initiatives",
    desc: "Delivering essential medical services, health campaigns, and emergency care to underserved areas.",
    image: "/images/health-campaign.jpg",
    link: "/projects"
  },
  {
    title: "Humanitarian Relief",
    desc: "Providing vital food security, disaster relief, and sustainable support to families in need.",
    image: "/images/aid-distribution.jpg",
    link: "/projects"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <Section className="bg-primary text-white py-16 -mt-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.value}</div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* About Intro Section */}
      <Section background="white" className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative blobs */}
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <img 
                src="/images/group-photo.jpg" 
                alt="CSSS Team" 
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -right-6 md:right-8 bg-white rounded-2xl shadow-xl p-5 border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary">Since 2003</div>
                    <div className="text-sm text-muted-foreground">Serving Somalia</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary leading-tight">
              A Legacy of Care & Compassion
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Charitable Society for Students of Sciences (CSSS) is a nonprofit humanitarian and development organization established in Somalia in 2003. Our mission is to support vulnerable individuals affected by human-made and natural disasters, with a strong emphasis on education and health services.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Over two decades, we have expanded our impact across education, healthcare, water sanitation, disaster relief, and community development. Our journey is defined by the resilience of the communities we serve.
            </p>
            <Link href="/about">
              <Button variant="link" className="text-primary p-0 h-auto text-lg font-semibold group">
                Learn more about our story 
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Focus Areas Section */}
      <Section background="muted" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Focus</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Areas of Impact</h2>
          <p className="text-lg text-muted-foreground">
            CSSS operates in various critical areas to create lasting change in communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-primary">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section background="white" className="py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Featured Projects</h2>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 img-zoom">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-display text-primary group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <Link href={project.link}>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold group/btn">
                  Learn more 
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overlay-gradient z-10" />
          <img 
            src="/images/ramadan-meal-1.jpg" 
            alt="Community support" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              Join Our Mission
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Make a Difference Today
            </h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Your support enables us to continue our vital work in education, healthcare, and humanitarian relief. Together, we can build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-7 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Donate Now
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 rounded-full px-10 py-7 text-lg backdrop-blur-sm transition-all duration-300"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
