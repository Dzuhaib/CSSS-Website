import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Globe2, Building2, Users, Heart, FileText, Shield } from "lucide-react";

const fundingSources = [
  {
    icon: Globe2,
    title: "International Organizations",
    percentage: "45%",
    description: "We partner with UN agencies, international NGOs, and multilateral organizations to implement large-scale humanitarian and development programs across Somalia.",
    examples: ["United Nations OCHA", "UNICEF", "World Food Programme", "International humanitarian organizations"]
  },
  {
    icon: Building2,
    title: "Government Grants",
    percentage: "25%",
    description: "Funding from government aid agencies and foreign ministries supports our community development, health, and education initiatives.",
    examples: ["Bilateral aid agencies", "European Union", "Regional development funds"]
  },
  {
    icon: Heart,
    title: "Individual Donors",
    percentage: "15%",
    description: "Generous individuals from around the world contribute to our work through one-time gifts, monthly donations, and major philanthropy.",
    examples: ["Monthly giving program", "One-time donations", "Major gifts", "Legacy giving"]
  },
  {
    icon: Users,
    title: "Private Foundations",
    percentage: "10%",
    description: "Private foundations and charitable trusts provide grants for specific programs, innovation, and capacity building initiatives.",
    examples: ["Family foundations", "Charitable trusts", "Corporate foundations"]
  },
  {
    icon: Building2,
    title: "Corporate Partners",
    percentage: "5%",
    description: "Businesses contribute through corporate social responsibility programs, employee giving, and cause-related marketing partnerships.",
    examples: ["Corporate donations", "Employee matching", "In-kind support", "Pro bono services"]
  }
];

const principles = [
  {
    icon: Shield,
    title: "Independence",
    description: "We maintain our operational independence regardless of funding source. Our humanitarian mission always comes first."
  },
  {
    icon: FileText,
    title: "Transparency",
    description: "All funding sources and expenditures are documented and reported. We publish annual financial reports and undergo independent audits."
  },
  {
    icon: Heart,
    title: "Ethical Standards",
    description: "We only accept funding that aligns with our values and humanitarian principles. We have strict due diligence processes for all donors."
  }
];

export default function SourceOfFunds() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Source of Funds" 
        description="Transparency in how we fund our humanitarian and development work in Somalia."
        image="/images/funds-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Financial Transparency</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">How We Fund Our Work</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CSSS is committed to complete transparency about where our funding comes from and how it is used. We believe donors and stakeholders have a right to understand our financial picture. This page provides an overview of our diverse funding sources and our commitment to responsible resource management.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our funding comes from a variety of sources, which helps ensure our sustainability and independence. We are grateful to all our partners, donors, and supporters who make our work possible.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Funding Sources */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Funding Sources</h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {fundingSources.map((source, index) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4 md:w-1/3">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <source.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-primary">{source.title}</h3>
                    <span className="text-2xl font-bold text-accent">{source.percentage}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-muted-foreground leading-relaxed mb-4">{source.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {source.examples.map((example, i) => (
                      <span key={i} className="text-sm bg-muted/50 text-muted-foreground px-3 py-1 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Principles */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Standards</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Funding Principles</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <principle.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Financial Accountability */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Accountability</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Financial Reporting</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              CSSS undergoes annual audits by independent certified public accountants. Our financial statements are prepared in accordance with international accounting standards and are available to donors, partners, and the public upon request.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We maintain rigorous internal controls and financial management systems to ensure that all funds are used appropriately and in accordance with donor requirements. Our finance team is trained in humanitarian accounting standards and compliance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For detailed financial information, including our latest audited statements, please contact our finance department at <a href="mailto:finance@csss-somalia.org" className="text-accent hover:underline">finance@csss-somalia.org</a>.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-white/80 mb-8">
              Your contribution, regardless of size, helps us deliver life-changing programs across Somalia. Join our community of supporters and make a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/donation-options" 
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                Make a Donation
              </a>
              <a 
                href="/partner" 
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 border border-white/20"
              >
                Partner With Us
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
