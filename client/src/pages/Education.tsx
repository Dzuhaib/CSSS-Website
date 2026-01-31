import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { GraduationCap, BookOpen, Users, School, Award, Lightbulb } from "lucide-react";

const programs = [
  {
    icon: School,
    title: "School Construction & Rehabilitation",
    description: "We build and restore schools in underserved communities, providing safe learning environments where children can thrive. Our facilities include proper classrooms, sanitation, and learning resources."
  },
  {
    icon: BookOpen,
    title: "Teacher Training Programs",
    description: "Quality education starts with quality teachers. We train educators in modern teaching methods, child psychology, and curriculum development to improve learning outcomes across Somalia."
  },
  {
    icon: Users,
    title: "Community Learning Centers",
    description: "Our learning centers serve as hubs for adult literacy, vocational training, and continuing education. These spaces empower community members of all ages to gain new skills."
  },
  {
    icon: Award,
    title: "Scholarship Programs",
    description: "Talented students from disadvantaged backgrounds receive scholarships to pursue higher education. We believe in investing in Somalia's future leaders and change-makers."
  },
  {
    icon: GraduationCap,
    title: "Girls' Education Initiative",
    description: "Breaking barriers to girls' education is central to our mission. We provide school supplies, uniforms, and safe transportation to ensure every girl has the chance to learn."
  },
  {
    icon: Lightbulb,
    title: "STEM Education",
    description: "Preparing students for the future through science, technology, engineering, and mathematics programs. We equip schools with labs and provide hands-on learning experiences."
  }
];

const stats = [
  { value: "45+", label: "Schools Built" },
  { value: "12,000+", label: "Students Enrolled" },
  { value: "850+", label: "Teachers Trained" },
  { value: "2,500+", label: "Scholarships Awarded" }
];

export default function Education() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Education Programs" 
        description="Building foundations for a brighter future through accessible, quality education for all Somalis."
        image="/images/education-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Education Changes Everything</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2003, CSSS has been at the forefront of educational development in Somalia. We understand that education is the most powerful tool for breaking the cycle of poverty and building resilient communities. Our programs reach remote villages, urban neighborhoods, and displaced populations—ensuring no child is left behind.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We work closely with local communities, government ministries, and international partners to create sustainable educational systems that will serve generations to come. Every school we build, every teacher we train, and every student we support represents a step toward a more prosperous Somalia.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="py-16 bg-primary/5">
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
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Our Education Programs</h2>
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
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{program.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Help Us Educate a Generation</h2>
            <p className="text-lg text-white/80 mb-8">
              Your support can provide textbooks, train teachers, build classrooms, and open doors of opportunity for thousands of Somali children. Together, we can make education accessible to all.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Support Education Programs
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
