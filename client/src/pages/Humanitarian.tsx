import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { AlertTriangle, Truck, Users, Shield, HeartHandshake, Radio } from "lucide-react";

const programs = [
  {
    icon: Truck,
    title: "Emergency Relief Distribution",
    description: "When disasters strike, we mobilize quickly to deliver food, water, medicine, and essential supplies to affected populations. Our logistics network reaches the most remote areas."
  },
  {
    icon: Users,
    title: "Displacement Response",
    description: "Supporting internally displaced persons and refugees with temporary shelter, food assistance, and protection services. We help families maintain dignity during crisis."
  },
  {
    icon: Shield,
    title: "Protection Services",
    description: "Safeguarding vulnerable populations including women, children, and the elderly. We provide safe spaces, psychosocial support, and advocacy for those most at risk."
  },
  {
    icon: AlertTriangle,
    title: "Drought & Famine Response",
    description: "Somalia faces recurring droughts that threaten lives and livelihoods. We respond with food distribution, water trucking, livestock support, and nutrition programs."
  },
  {
    icon: HeartHandshake,
    title: "Community-Based Response",
    description: "Training and equipping local communities to be first responders in emergencies. Empowered communities can save lives before external help arrives."
  },
  {
    icon: Radio,
    title: "Early Warning Systems",
    description: "Monitoring and predicting crises before they happen. Our early warning systems help communities prepare and enable faster humanitarian response."
  }
];

const stats = [
  { value: "500,000+", label: "People Assisted" },
  { value: "75+", label: "Emergency Responses" },
  { value: "120+", label: "Displacement Camps Supported" },
  { value: "24/7", label: "Emergency Operations" }
];

export default function Humanitarian() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Humanitarian & Emergency Projects" 
        description="Rapid response to crises, protecting lives and restoring hope in times of emergency."
        image="/images/humanitarian-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Response</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">When Crisis Calls, We Answer</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somalia has faced decades of conflict, climate shocks, and humanitarian emergencies. Through it all, CSSS has remained on the ground—responding to floods, droughts, displacement, and conflict with speed and compassion. Our teams work around the clock to reach those in desperate need.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We don't just respond to emergencies; we prepare for them. Our early warning systems, pre-positioned supplies, and trained response teams mean we can act within hours of a crisis, not days. When every minute counts, this preparedness saves lives.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-destructive/5">
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
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Emergency Services</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">How We Respond</h2>
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
              <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center text-destructive mb-6 group-hover:bg-destructive group-hover:text-white transition-colors">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Current Response */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Ongoing Efforts</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Current Humanitarian Response</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somalia continues to face a complex humanitarian crisis driven by prolonged drought, ongoing conflict, and economic instability. CSSS is currently responding across multiple regions with integrated programming that addresses immediate needs while building long-term resilience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our teams are providing emergency food assistance, clean water through trucking and well rehabilitation, emergency health services, and protection support for the most vulnerable. We are also working to prevent displacement through early action programs that help communities cope with shocks before they are forced to flee.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="py-20 bg-destructive text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Lives Hang in the Balance</h2>
            <p className="text-lg text-white/80 mb-8">
              In emergencies, your donation becomes a lifeline. It provides food for a starving family, medicine for a sick child, or shelter for someone who has lost everything. Please give generously—lives depend on it.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-white text-destructive hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Donate to Emergency Response
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
