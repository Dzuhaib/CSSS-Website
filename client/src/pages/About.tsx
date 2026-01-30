import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Target, Lightbulb, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="About CSSS" 
        description="Serving humanity with dignity, compassion, and dedication since 2003."
        image="/images/group-photo.jpg"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-primary mb-6">Our History</h2>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-4">
                The Charitable Society for Students of Sciences (CSSS) was founded in 2003 in Mogadishu, Somalia, during a time of great need. What started as a small initiative to support students has grown into a comprehensive humanitarian organization.
              </p>
              <p className="mb-4">
                Over the past two decades, we have expanded our scope beyond education to include healthcare, water sanitation, disaster relief, and community development. Our journey is defined by the resilience of the communities we serve and the unwavering support of our partners.
              </p>
              <p>
                Today, CSSS operates across multiple regions, delivering impactful projects that address the root causes of poverty and instability.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Target className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To improve the quality of life for vulnerable communities through sustainable development in education, health, and social welfare.
              </p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <Lightbulb className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                A society where every individual has access to quality education, healthcare, and the opportunity to thrive with dignity.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section background="muted">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Our Core Values</h2>
          <p className="text-muted-foreground">The principles that guide every action we take.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Shield, title: "Integrity", desc: "We operate with transparency and accountability in all our dealings." },
            { icon: Award, title: "Excellence", desc: "We strive for the highest standards in our service delivery." },
            { icon: Users, title: "Inclusivity", desc: "We serve all people regardless of background or belief." },
            { icon: Heart, title: "Compassion", desc: "We are driven by a deep empathy for those suffering." },
          ].map((val, i) => {
            const Icon = val.icon as any;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </Section>

      <Footer />
    </div>
  );
}

// Helper icons (avoiding import errors if not in lucide imports above)
import { Users, Heart } from "lucide-react";
