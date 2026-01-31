import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Megaphone, Scale, FileText, Users, Globe, MessageCircle } from "lucide-react";

const initiatives = [
  {
    icon: Scale,
    title: "Policy Advocacy",
    description: "We engage with government officials, parliamentarians, and policymakers to promote laws and policies that protect vulnerable populations and advance human rights in Somalia."
  },
  {
    icon: Megaphone,
    title: "Public Awareness Campaigns",
    description: "Raising awareness about critical issues facing Somali communities—from education and health to climate change and gender equality. An informed public is an empowered public."
  },
  {
    icon: FileText,
    title: "Research & Documentation",
    description: "Producing evidence-based reports, studies, and publications that inform policy decisions and highlight the needs of underserved communities across Somalia."
  },
  {
    icon: Users,
    title: "Community Mobilization",
    description: "Empowering communities to advocate for their own rights and needs. We train local leaders and support grassroots movements for social change."
  },
  {
    icon: Globe,
    title: "International Engagement",
    description: "Representing Somali communities in international forums, ensuring their voices are heard in global discussions on humanitarian issues and development."
  },
  {
    icon: MessageCircle,
    title: "Media & Communications",
    description: "Amplifying stories from the ground through media partnerships, social media, and strategic communications that shape public discourse and inspire action."
  }
];

const focusAreas = [
  {
    title: "Children's Rights",
    description: "Advocating for the protection of children from exploitation, abuse, and recruitment into armed groups. Every child deserves safety and opportunity."
  },
  {
    title: "Women's Empowerment",
    description: "Championing gender equality, women's participation in decision-making, and an end to harmful practices that affect women and girls."
  },
  {
    title: "Climate Justice",
    description: "Raising awareness about the disproportionate impact of climate change on Somali communities and pushing for climate adaptation and mitigation measures."
  },
  {
    title: "Peace & Reconciliation",
    description: "Supporting dialogue, conflict resolution, and reconciliation efforts that are essential for lasting peace and stability in Somalia."
  }
];

export default function Advocacy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Advocacy" 
        description="Speaking up for those who cannot, driving systemic change through policy and public awareness."
        image="/images/advocacy-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Voice</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Advocating for a Better Somalia</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Humanitarian work addresses immediate needs, but lasting change requires addressing root causes. Through advocacy, CSSS works to influence policies, shift public attitudes, and create an environment where every Somali can thrive. We believe that systemic change is possible when communities, organizations, and governments work together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our advocacy is grounded in evidence from our fieldwork and the voices of the communities we serve. We don't speak for communities—we amplify their voices, helping them advocate for their own rights and needs. This approach ensures that our advocacy efforts are authentic, relevant, and effective.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Initiatives */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Advocacy Initiatives</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <initiative.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{initiative.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Focus Areas */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Priority Issues</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Focus Areas</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{area.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Movement</h2>
            <p className="text-lg text-white/80 mb-8">
              Change happens when people come together. Join our advocacy efforts—share our campaigns, attend events, or lend your voice to the causes that matter. Together, we can build a more just and equitable Somalia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/volunteer" 
                className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                Get Involved
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1 border border-white/20"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
