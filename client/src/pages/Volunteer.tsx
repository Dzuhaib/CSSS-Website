import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { UserPlus, GraduationCap, Stethoscope, Laptop, Heart, Globe, Calendar } from "lucide-react";

const opportunities = [
  {
    icon: GraduationCap,
    title: "Education Volunteers",
    description: "Support our education programs by teaching, tutoring, or mentoring students. Share your knowledge and help shape young minds for a brighter future.",
    commitment: "Minimum 3 months"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Volunteers",
    description: "Medical professionals can provide vital services in underserved communities. Join our health teams for clinical work, training, or public health campaigns.",
    commitment: "Minimum 1 month"
  },
  {
    icon: Laptop,
    title: "Technical Volunteers",
    description: "Use your skills in IT, engineering, or specialized fields to strengthen our programs. Remote opportunities available for certain roles.",
    commitment: "Flexible"
  },
  {
    icon: Heart,
    title: "Community Volunteers",
    description: "Help with community outreach, event coordination, and awareness campaigns. Your energy and enthusiasm make a difference.",
    commitment: "Flexible"
  },
  {
    icon: Globe,
    title: "International Volunteers",
    description: "Professionals from abroad can contribute through short-term assignments, capacity building, and knowledge transfer programs.",
    commitment: "2-6 months"
  },
  {
    icon: Calendar,
    title: "Virtual Volunteers",
    description: "Contribute from anywhere in the world through translation, content creation, research, or online tutoring programs.",
    commitment: "Flexible"
  }
];

const benefits = [
  {
    title: "Make Real Impact",
    description: "Your time and skills directly contribute to improving lives in Somalia. Every hour you give creates tangible change."
  },
  {
    title: "Gain Experience",
    description: "Work alongside experienced humanitarian professionals and gain valuable field experience in challenging environments."
  },
  {
    title: "Cultural Immersion",
    description: "Experience the rich culture and warm hospitality of Somalia while making meaningful connections with local communities."
  },
  {
    title: "Professional Growth",
    description: "Develop new skills, expand your professional network, and add meaningful experience to your resume."
  }
];

const requirements = [
  "Minimum age of 21 years",
  "Relevant skills or professional qualifications",
  "Good physical and mental health",
  "Cultural sensitivity and adaptability",
  "Commitment to humanitarian principles",
  "Background check clearance"
];

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Volunteer" 
        description="Give your time, share your skills, and be part of meaningful change in Somalia."
        image="/images/volunteer-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Join Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Your Skills Can Change Lives</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Volunteers are the heartbeat of CSSS. Since our founding, dedicated individuals from Somalia and around the world have given their time, energy, and expertise to support our mission. Whether you're a doctor, teacher, engineer, or simply someone with a passion to help—there's a place for you in our work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Volunteering with CSSS is more than just giving back—it's an opportunity to grow, learn, and connect with communities in ways that will stay with you forever. We provide training, support, and a meaningful experience for all our volunteers.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Opportunities */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Opportunities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Volunteer Roles</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={opportunity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <opportunity.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{opportunity.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{opportunity.description}</p>
              <span className="inline-block text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {opportunity.commitment}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why Volunteer</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Benefits of Volunteering</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Requirements */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">What We're Looking For</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={req} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-muted-foreground">{req}</span>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-white/80 mb-8">
              Take the first step toward a meaningful volunteer experience. Contact us to learn more about current opportunities and how you can contribute to our mission.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Apply to Volunteer
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
