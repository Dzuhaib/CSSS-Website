import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Shield, GraduationCap } from "lucide-react";

const departments = [
  {
    icon: Heart,
    title: "Programs & Operations",
    description: "Lead and implement our humanitarian and development programs. Work directly with communities to deliver life-changing interventions."
  },
  {
    icon: Shield,
    title: "Finance & Administration",
    description: "Ensure transparent, efficient management of resources. Your work enables our programs to run smoothly and accountably."
  },
  {
    icon: Users,
    title: "Human Resources",
    description: "Build and support our team of dedicated professionals. Create an environment where people thrive and do their best work."
  },
  {
    icon: TrendingUp,
    title: "Monitoring & Evaluation",
    description: "Measure our impact and drive continuous improvement. Use data to tell the story of our work and inform decisions."
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description: "Train staff, partners, and communities. Share knowledge that strengthens organizations and empowers individuals."
  },
  {
    icon: Briefcase,
    title: "Partnerships & Development",
    description: "Build relationships with donors, partners, and stakeholders. Secure resources that fuel our mission and expand our reach."
  }
];

const benefits = [
  {
    title: "Competitive Compensation",
    description: "Fair salaries benchmarked to the humanitarian sector, with regular reviews and adjustments."
  },
  {
    title: "Health & Wellbeing",
    description: "Comprehensive health insurance and support for physical and mental wellbeing."
  },
  {
    title: "Professional Development",
    description: "Training opportunities, conferences, and support for continued learning and growth."
  },
  {
    title: "Work-Life Balance",
    description: "Flexible arrangements where possible, and respect for personal time and boundaries."
  },
  {
    title: "Meaningful Work",
    description: "Join a mission-driven organization where your daily work makes a real difference in people's lives."
  },
  {
    title: "Collaborative Culture",
    description: "Work alongside passionate colleagues who share your commitment to humanitarian values."
  }
];

const currentOpenings = [
  {
    title: "Program Manager - Education",
    location: "Mogadishu, Somalia",
    type: "Full-time",
    department: "Programs"
  },
  {
    title: "Health Coordinator",
    location: "Baidoa, Somalia",
    type: "Full-time",
    department: "Health"
  },
  {
    title: "Finance Officer",
    location: "Mogadishu, Somalia",
    type: "Full-time",
    department: "Finance"
  },
  {
    title: "M&E Assistant",
    location: "Various Locations",
    type: "Full-time",
    department: "M&E"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Careers at CSSS" 
        description="Build a career with purpose. Join our team of dedicated professionals working to transform lives in Somalia."
        image="/images/careers-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Work That Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At CSSS, we're more than colleagues—we're a community united by a shared vision of a prosperous, peaceful Somalia. Our team members come from diverse backgrounds but share a common dedication to humanitarian values and excellence in service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Whether you're an experienced humanitarian professional or just starting your career, CSSS offers opportunities to grow, learn, and make a lasting impact. We invest in our people because we know that our staff are our greatest asset.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Current Openings */}
      <Section className="py-20 bg-primary/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Opportunities</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Current Openings</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {currentOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-display font-bold text-primary mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.department}
                  </span>
                </div>
              </div>
              <a 
                href="/contact" 
                className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-full transition-all text-center"
              >
                Apply Now
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Departments */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Teams</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Departments at CSSS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <dept.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{dept.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Why Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Benefits & Culture</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50"
            >
              <h3 className="text-lg font-display font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-lg text-white/80 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals. Send us your CV and tell us how you'd like to contribute to our mission.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Submit Your Application
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
