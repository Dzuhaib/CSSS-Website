import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Heart, Stethoscope, Baby, Pill, Activity, ShieldCheck } from "lucide-react";

const programs = [
  {
    icon: Stethoscope,
    title: "Primary Healthcare Services",
    description: "Our mobile clinics and health centers bring essential medical care to remote communities. We provide consultations, diagnostics, and treatment for common illnesses and chronic conditions."
  },
  {
    icon: Baby,
    title: "Maternal & Child Health",
    description: "Protecting mothers and children through prenatal care, safe delivery services, immunization programs, and nutrition support. Every mother deserves access to quality healthcare."
  },
  {
    icon: Pill,
    title: "Medicine & Medical Supplies",
    description: "We procure and distribute essential medicines and medical equipment to health facilities across Somalia, ensuring communities have access to life-saving treatments."
  },
  {
    icon: Activity,
    title: "Disease Prevention & Control",
    description: "From vaccination campaigns to disease surveillance, we work to prevent outbreaks and control the spread of infectious diseases in vulnerable communities."
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Addressing the psychological needs of communities affected by conflict and displacement. Our counselors provide trauma support and mental health awareness programs."
  },
  {
    icon: ShieldCheck,
    title: "Health Worker Training",
    description: "Building local capacity by training community health workers, nurses, and midwives. These trained professionals become the backbone of sustainable healthcare delivery."
  }
];

const stats = [
  { value: "150,000+", label: "Patients Treated" },
  { value: "25+", label: "Health Facilities" },
  { value: "500+", label: "Health Workers Trained" },
  { value: "80,000+", label: "Children Immunized" }
];

export default function Health() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Health Programs" 
        description="Delivering quality healthcare to underserved communities across Somalia."
        image="/images/health-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Commitment</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Healthcare for Every Somali</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access to healthcare is a fundamental human right, yet millions of Somalis lack access to even basic medical services. CSSS is working to change this reality. Through our network of health facilities, mobile clinics, and trained community health workers, we bring medical care directly to those who need it most.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our health programs are designed with sustainability in mind. We don't just treat patients—we build the systems, train the staff, and establish the infrastructure that communities need to maintain good health for generations. From the busiest urban centers to the most isolated rural villages, we are committed to reaching everyone.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-accent/5">
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
              <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">{stat.value}</div>
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
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Health Programs & Initiatives</h2>
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
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 bg-accent text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Save Lives Today</h2>
            <p className="text-lg text-white/80 mb-8">
              Your contribution can provide medicine, fund mobile clinics, train healthcare workers, and bring hope to families in crisis. Every donation makes a difference in someone's life.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Support Health Programs
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
