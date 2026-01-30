import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Target, Lightbulb, Shield, Award, Heart, Users, BookOpen, Droplets, Wheat, Baby, UserCheck, Scale, Coins } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: BookOpen,
    title: "Education",
    description: "We provide educational opportunities and resources to ensure access to quality education for all, building schools and supporting students across Somalia.",
  },
  {
    icon: Droplets,
    title: "Water, Sanitation & Hygiene (WASH)",
    description: "Our efforts aim to improve access to clean water and sanitation facilities and promote better hygiene practices in underserved communities.",
  },
  {
    icon: Wheat,
    title: "Food Security & Economic Development",
    description: "We work to enhance food security and foster economic growth to ensure sustainable livelihoods for families and communities.",
  },
  {
    icon: Baby,
    title: "Orphan & Child Care",
    description: "We offer care and support for orphans and vulnerable children, ensuring their well-being and development through comprehensive programs.",
  },
  {
    icon: UserCheck,
    title: "Youth & Women Empowerment",
    description: "We empower youth and women through various programs, helping them gain skills, confidence, and opportunities for a better future.",
  },
  {
    icon: Scale,
    title: "Peace-building & Good Governance",
    description: "We promote peace-building initiatives, conflict transformation, and good governance practices to create a more stable and just society.",
  },
];

const VALUES = [
  { icon: Shield, title: "Integrity", desc: "We operate with transparency and accountability in all our dealings." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest standards in our service delivery." },
  { icon: Users, title: "Inclusivity", desc: "We serve all people regardless of background or belief." },
  { icon: Heart, title: "Compassion", desc: "We are driven by a deep empathy for those suffering." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="About CSSS" 
        description="Serving humanity with dignity, compassion, and dedication since 2003."
        image="/images/group-photo.jpg"
      />

      {/* History & Mission Section */}
      <Section className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our History</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-5 leading-relaxed">
                The Charitable Society for Students of Sciences (CSSS) is a nonprofit humanitarian and development organization established in Somalia in 2003. Our mission is to support vulnerable individuals affected by human-made and natural disasters, with a strong emphasis on education and health services.
              </p>
              <p className="mb-5 leading-relaxed">
                Over the past two decades, we have expanded our scope beyond education to include healthcare, water sanitation, disaster relief, and community development. Our journey is defined by the resilience of the communities we serve and the unwavering support of our partners.
              </p>
              <p className="leading-relaxed">
                Today, CSSS operates across multiple regions, delivering impactful projects that address the root causes of poverty and instability, while building sustainable futures for generations to come.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-border/50 shadow-sm">
              <Target className="w-12 h-12 text-accent mb-5" />
              <h3 className="text-xl font-bold mb-3 text-primary font-display">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To improve the quality of life for vulnerable communities through sustainable development in education, health, and social welfare, while responding effectively to humanitarian crises.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-8 rounded-2xl border border-border/50 shadow-sm">
              <Lightbulb className="w-12 h-12 text-accent mb-5" />
              <h3 className="text-xl font-bold mb-3 text-primary font-display">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A society where every individual has access to quality education, healthcare, and the opportunity to thrive with dignity, free from the burden of poverty and conflict.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Focus Areas Section */}
      <Section background="muted" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Areas of Operation</h2>
          <p className="text-lg text-muted-foreground">
            CSSS operates in various critical areas to create lasting positive change in communities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOCUS_AREAS.map((area, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 card-hover group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3 font-display text-primary">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Source of Funds Section */}
      <Section className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Transparency</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Source of Funds</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The organization has received grants and donations from various partners and supporters over the years. We are grateful for the trust placed in us by donors who believe in our mission.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Additionally, several projects have been completed through self-funding by active CSSS organization members, demonstrating our commitment to the cause even when external funding is limited.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-primary/5 p-5 rounded-xl text-center">
                <Coins className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-primary">Grants</div>
                <div className="text-sm text-muted-foreground">Partner Organizations</div>
              </div>
              <div className="bg-primary/5 p-5 rounded-xl text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-primary">Donations</div>
                <div className="text-sm text-muted-foreground">Individual Supporters</div>
              </div>
              <div className="bg-primary/5 p-5 rounded-xl text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-primary">Self-Funded</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <img 
              src="/images/ramadan-meal-2.jpg" 
              alt="Community support" 
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover relative z-10"
            />
          </motion.div>
        </div>
      </Section>

      {/* Core Values Section */}
      <Section background="muted" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg">The principles that guide every action we take.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((val, i) => {
            const Icon = val.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card p-8 rounded-2xl shadow-sm text-center hover:shadow-lg transition-all duration-500 border border-border/50 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-3 font-display text-primary">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
