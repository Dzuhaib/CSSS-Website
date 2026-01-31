import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Droplets, Wheat, Home, Briefcase, Leaf, Building } from "lucide-react";

const programs = [
  {
    icon: Droplets,
    title: "Water, Sanitation & Hygiene (WASH)",
    description: "Clean water saves lives. We construct wells, water systems, and sanitation facilities while educating communities on hygiene practices. Access to safe water transforms health outcomes."
  },
  {
    icon: Wheat,
    title: "Food Security & Agriculture",
    description: "Supporting farmers with seeds, tools, and training to increase crop yields. We also establish food distribution networks to reach families facing hunger and malnutrition."
  },
  {
    icon: Home,
    title: "Shelter & Housing",
    description: "Providing durable shelter solutions for displaced families and vulnerable communities. A safe home is the foundation for stability, dignity, and recovery."
  },
  {
    icon: Briefcase,
    title: "Livelihoods & Economic Empowerment",
    description: "Creating opportunities through vocational training, microfinance, and small business support. When people can earn a living, entire communities prosper."
  },
  {
    icon: Leaf,
    title: "Environmental Sustainability",
    description: "Promoting climate-resilient practices including reforestation, sustainable farming, and renewable energy projects. We protect the environment for future generations."
  },
  {
    icon: Building,
    title: "Infrastructure Development",
    description: "Building roads, bridges, and community facilities that connect people to markets, services, and opportunities. Good infrastructure is the backbone of development."
  }
];

const stats = [
  { value: "200+", label: "Wells Constructed" },
  { value: "35,000+", label: "Farmers Supported" },
  { value: "5,000+", label: "Homes Built" },
  { value: "8,500+", label: "Jobs Created" }
];

export default function Development() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Development Programs" 
        description="Building sustainable futures through infrastructure, livelihoods, and community development."
        image="/images/development-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Sustainable Development for All</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              True development goes beyond emergency aid—it creates lasting change that empowers communities to thrive independently. At CSSS, we take a holistic approach to development, addressing the interconnected challenges of water access, food security, shelter, and economic opportunity.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We believe that Somalis hold the solutions to their own challenges. Our role is to provide resources, expertise, and support while communities lead their own development. This approach ensures that every project we undertake is sustainable, culturally appropriate, and genuinely responsive to local needs.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-primary/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Focus Areas</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Development Initiatives</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in Lasting Change</h2>
            <p className="text-lg text-white/80 mb-8">
              Development projects create ripple effects that benefit entire communities for years to come. Your support helps build the infrastructure, systems, and opportunities that transform lives.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Support Development Programs
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
