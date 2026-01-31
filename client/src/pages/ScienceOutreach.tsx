import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Microscope, FlaskConical, Cpu, Rocket, BookOpen, Award } from "lucide-react";

const programs = [
  {
    icon: FlaskConical,
    title: "Science Fairs & Exhibitions",
    description: "Organizing annual science fairs where students showcase their experiments and innovations. These events spark curiosity and celebrate young scientific minds across Somalia."
  },
  {
    icon: Microscope,
    title: "Laboratory Programs",
    description: "Equipping schools with science laboratories and providing hands-on learning experiences. Students learn by doing—conducting experiments that bring textbook concepts to life."
  },
  {
    icon: Cpu,
    title: "Technology & Digital Skills",
    description: "Teaching coding, robotics, and digital literacy to prepare students for the modern economy. Technology skills open doors to new opportunities and careers."
  },
  {
    icon: Rocket,
    title: "Innovation Challenges",
    description: "Hosting competitions that challenge students to solve real-world problems through scientific thinking and innovation. The best ideas receive funding and mentorship."
  },
  {
    icon: BookOpen,
    title: "Science Clubs & Mentorship",
    description: "Establishing science clubs in schools and connecting students with mentors in scientific fields. Regular activities nurture ongoing interest in STEM subjects."
  },
  {
    icon: Award,
    title: "Scholarships for STEM Students",
    description: "Providing scholarships for talented students to pursue higher education in science, technology, engineering, and mathematics both locally and abroad."
  }
];

const impact = [
  { value: "30+", label: "Schools with Science Labs" },
  { value: "5,000+", label: "Students in STEM Programs" },
  { value: "150+", label: "Science Club Members" },
  { value: "75+", label: "STEM Scholarships Awarded" }
];

export default function ScienceOutreach() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Science Outreach" 
        description="Inspiring the next generation of Somali scientists, innovators, and problem-solvers."
        image="/images/science-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Nurturing Scientific Curiosity</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The "S" in CSSS stands for Sciences—a core part of our identity since our founding in 2003. We believe that science and technology are essential for Somalia's development. Through our science outreach programs, we work to ignite curiosity, build skills, and create pathways for young Somalis to pursue careers in STEM fields.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Our programs go beyond traditional classroom learning. We create spaces where students can experiment, fail, learn, and innovate. Whether it's through hands-on laboratory work, coding workshops, or science competitions, we're building a culture of scientific inquiry that will benefit Somalia for generations.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Impact Stats */}
      <Section className="py-16 bg-primary/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impact.map((stat, index) => (
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
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Science & STEM Initiatives</h2>
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

      {/* Success Stories */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Inspiring Journeys</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Many of our science program alumni have gone on to pursue remarkable careers. From students who discovered their passion for biology in our science clubs and now work in healthcare, to young innovators who learned coding in our workshops and have launched technology startups—the impact of early science education ripples through entire communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're particularly proud of our female STEM graduates, who are breaking barriers and becoming role models for the next generation of Somali girls interested in science and technology. Their success shows what's possible when talent meets opportunity.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in Future Innovators</h2>
            <p className="text-lg text-white/80 mb-8">
              Support our science outreach programs and help us equip the next generation with the skills they need to solve tomorrow's challenges. Every contribution brings us closer to a more scientifically literate Somalia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/donation-options" 
                className="inline-block bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
              >
                Support STEM Programs
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
