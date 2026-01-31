import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Heart, Shield, Eye, TrendingUp, Users, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Direct Impact",
    description: "Your donation goes directly to the people who need it most. We maintain low overhead costs so that the maximum amount reaches communities on the ground."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We are committed to the highest standards of accountability. Regular financial reports and program updates show exactly how funds are used."
  },
  {
    icon: Eye,
    title: "Local Expertise",
    description: "As a Somali-led organization, we understand the context, culture, and needs of the communities we serve. This local knowledge makes our programs more effective."
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "For over 20 years, CSSS has been delivering results in Somalia. Our experience and established presence ensure your donation is put to work effectively."
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "We don't impose solutions—we work alongside communities to identify needs and design programs that truly serve their priorities and aspirations."
  },
  {
    icon: CheckCircle,
    title: "Sustainable Solutions",
    description: "We focus on long-term change, not just immediate relief. Our programs build capacity and systems that continue to benefit communities for years to come."
  }
];

const impactStories = [
  {
    quote: "The school CSSS built in our village changed everything. My daughter is now studying to become a doctor. We never thought this was possible.",
    author: "Halimo A.",
    location: "Bay Region"
  },
  {
    quote: "When the drought came, CSSS was there with food and water. They didn't just help us survive—they helped us rebuild our farm so we could support ourselves again.",
    author: "Mohamed O.",
    location: "Galgaduud Region"
  },
  {
    quote: "The health clinic saves lives every day. Before it came, we had to travel two days to see a doctor. Now healthcare is in our community.",
    author: "Amina H.",
    location: "Lower Shabelle"
  }
];

const commitments = [
  "We spend at least 85% of every dollar on programs",
  "Annual audits by independent certified auditors",
  "Regular reports to all donors and stakeholders",
  "Strict policies against fraud and corruption",
  "Adherence to international humanitarian standards",
  "Transparent governance and decision-making"
];

export default function WhyDonate() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Why Donate?" 
        description="Your generosity makes our work possible. Here's why donating to CSSS matters."
        image="/images/why-donate-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Promise</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Your Gift Creates Real Change</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In a world where many organizations compete for your generosity, we understand you want to know your donation will truly make a difference. At CSSS, we take that responsibility seriously. Every gift, whether large or small, is treated as a sacred trust.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              When you give to CSSS, you're not just writing a check—you're becoming part of a movement that is transforming lives across Somalia. You're providing education to children, healthcare to families, food to the hungry, and hope to communities that have faced unimaginable challenges.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Reasons to Donate */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">The Difference</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Why Choose CSSS?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Impact Stories */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Real Stories</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Voices from the Field</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <motion.div
              key={story.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl"
            >
              <p className="text-muted-foreground leading-relaxed italic mb-6">"{story.quote}"</p>
              <div>
                <p className="font-bold text-primary">{story.author}</p>
                <p className="text-sm text-muted-foreground">{story.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Commitments */}
      <Section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Accountability</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Commitment to Donors</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div key={commitment} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Be Part of the Change</h2>
            <p className="text-lg text-white/80 mb-8">
              Your donation is an investment in human dignity, opportunity, and hope. Join thousands of supporters who have chosen to make a difference through CSSS.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Donate Now
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
