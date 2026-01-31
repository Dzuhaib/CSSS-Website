import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Handshake, Building2, Globe2, Users, Target, Heart } from "lucide-react";

const partnershipTypes = [
  {
    icon: Building2,
    title: "Corporate Partnerships",
    description: "Partner with us through corporate social responsibility initiatives, employee giving programs, or cause-related marketing campaigns. We'll work with your team to create meaningful impact."
  },
  {
    icon: Globe2,
    title: "Institutional Partners",
    description: "We collaborate with governments, UN agencies, and international organizations on large-scale programs. Our local expertise complements your resources and reach."
  },
  {
    icon: Users,
    title: "NGO & Civil Society",
    description: "Fellow organizations working in Somalia—let's collaborate rather than duplicate. Together we can achieve more through coordinated efforts and shared learning."
  },
  {
    icon: Target,
    title: "Technical Partners",
    description: "Share your expertise in specialized areas like technology, research, or capacity building. Your knowledge can strengthen our programs and expand our impact."
  },
  {
    icon: Heart,
    title: "Foundation Support",
    description: "Foundations seeking to make a difference in Somalia will find in us a reliable, transparent, and effective partner with deep roots in the communities we serve."
  },
  {
    icon: Handshake,
    title: "Community Partners",
    description: "Local organizations, religious institutions, and community groups are the foundation of our work. We believe in working alongside communities, not for them."
  }
];

const benefits = [
  "Direct access to underserved communities across Somalia",
  "Transparent reporting and accountability",
  "Over 20 years of operational experience",
  "Strong government and community relationships",
  "Comprehensive program implementation capacity",
  "Commitment to sustainability and local ownership"
];

const currentPartners = [
  "United Nations OCHA",
  "UNICEF",
  "World Food Programme",
  "Various International NGOs",
  "Ministry of Education, Somalia",
  "Ministry of Health, Somalia"
];

export default function Partner() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Partner with Us" 
        description="Together we can achieve more. Join hands with CSSS to create lasting change in Somalia."
        image="/images/partner-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Collaborate</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Partnerships for Impact</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The challenges facing Somalia are too large for any single organization to tackle alone. That's why partnership is at the heart of everything we do. Since 2003, CSSS has worked alongside local communities, government ministries, international organizations, and private sector partners to deliver programs that make a real difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We bring deep local knowledge, community trust, and operational capacity. Our partners bring resources, expertise, and global perspectives. Together, we create programs that are both locally appropriate and internationally excellent.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Partnership Types */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">How We Partner</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Partnership Opportunities</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <type.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{type.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Partner With Us */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why CSSS</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Why Partner with Us?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When you partner with CSSS, you partner with an organization that has spent over two decades earning the trust of Somali communities. We know the landscape, we understand the culture, and we have the relationships needed to deliver results.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 p-8 md:p-12 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Current Partners</h3>
            <p className="text-muted-foreground mb-8">
              We are proud to work alongside leading organizations in humanitarian and development sectors:
            </p>
            <div className="space-y-4">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card px-6 py-4 rounded-xl border border-border/50"
                >
                  <span className="font-medium text-primary">{partner}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-white/80 mb-8">
              Ready to explore partnership opportunities? We'd love to hear about your organization and how we might collaborate. Reach out to start a conversation.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
