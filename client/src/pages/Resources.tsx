import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink, GraduationCap, Users, BookOpen, Heart, Coins, Lightbulb } from "lucide-react";

const RESOURCE_SECTIONS = [
  {
    id: "educational",
    title: "Educational Resources",
    icon: GraduationCap,
    items: [
      { title: "Scholarships & Grants", desc: "Financial support programs for outstanding students from underprivileged backgrounds." },
      { title: "Resource Libraries", desc: "Access to educational materials, textbooks, and learning resources." },
      { title: "Workshops & Seminars", desc: "Regular educational events to enhance learning and development." },
    ]
  },
  {
    id: "mentorship",
    title: "Mentorship & Networking",
    icon: Users,
    items: [
      { title: "Mentorship Programs", desc: "Connect with experienced professionals for career guidance." },
      { title: "Networking Events", desc: "Opportunities to build connections with peers and industry leaders." },
      { title: "Internship Opportunities", desc: "Practical experience placements with partner organizations." },
    ]
  },
  {
    id: "academic",
    title: "Academic Support",
    icon: BookOpen,
    items: [
      { title: "Tutoring Services", desc: "One-on-one academic support for students needing extra help." },
      { title: "Academic Advising", desc: "Guidance on course selection, study strategies, and career paths." },
    ]
  },
  {
    id: "community",
    title: "Community & Well-being",
    icon: Heart,
    items: [
      { title: "Student Clubs & Societies", desc: "Join communities of like-minded individuals for growth and fellowship." },
      { title: "Mental Health Support", desc: "Counseling services and wellness resources for holistic development." },
    ]
  },
  {
    id: "funding",
    title: "Funding & Sustainability",
    icon: Coins,
    items: [
      { title: "Fundraising Initiatives", desc: "Campaigns to support ongoing projects and new initiatives." },
      { title: "Grant Application Guidance", desc: "Support for organizations seeking funding for community projects." },
    ]
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Resources & Initiatives" 
        description="Access programs, reports, and opportunities designed to empower communities."
        image="/images/children-school.jpg"
      />

      {/* Annual Reports */}
      <Section className="py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Transparency</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Annual Reports</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe in full transparency. Access our annual reports to see how your contributions are making a difference.
            </p>
            <div className="space-y-4">
              {[2025, 2024, 2023, 2022].map((year) => (
                <div key={year} className="flex items-center justify-between p-5 bg-card rounded-xl border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Annual Report {year}</h3>
                      <p className="text-xs text-muted-foreground">PDF Document</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-accent hover:text-accent/80 hover:bg-accent/10">
                    <Download className="w-5 h-5" />
                  </Button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
            <img 
              src="/images/group-photo.jpg" 
              alt="Our team" 
              className="rounded-2xl shadow-2xl w-full aspect-[4/3] object-cover relative z-10"
            />
          </motion.div>
        </div>
      </Section>

      {/* Resource Categories */}
      <Section background="muted" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Support Programs</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Our Initiatives</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive programs designed to support students, communities, and sustainable development.
          </p>
        </div>

        <div className="space-y-8">
          {RESOURCE_SECTIONS.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary">{section.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, idx) => (
                  <div key={idx} className="p-5 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20">
        <div className="bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Have a Project Idea?</h2>
            <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
              We're always looking for partners and innovative ideas to expand our impact. Let's work together.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 rounded-full px-10 py-6 text-lg shadow-xl font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Contact Us <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
