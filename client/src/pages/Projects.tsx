import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Stethoscope, Droplets, Wheat, Wrench, Home, Users } from "lucide-react";

const PROJECT_CATEGORIES = [
  {
    id: "education",
    title: "Education",
    icon: BookOpen,
    description: "School infrastructure development, improving learning environments, and long-term educational impact.",
    projects: [
      {
        title: "Primary School Construction",
        description: "Built a new 12-classroom facility in rural Mogadishu, serving over 500 children who previously lacked access to education.",
        image: "/images/children-school.jpg",
        stats: "500+ Students Enrolled"
      },
      {
        title: "Teacher Training Program",
        description: "Comprehensive training for local educators to enhance teaching quality and student outcomes.",
        stats: "50+ Teachers Trained"
      }
    ]
  },
  {
    id: "health",
    title: "Health",
    icon: Stethoscope,
    description: "Local health facilities, primary healthcare access, and emergency medical services.",
    projects: [
      {
        title: "Mobile Health Clinics",
        description: "Deployed medical teams to remote villages to provide vaccinations, maternal care, and basic health screenings.",
        image: "/images/health-campaign.jpg",
        stats: "2,000+ Patients Served"
      },
      {
        title: "Water-Borne Disease Prevention",
        description: "Campaign for protection and treatment of water-borne diseases in Mogadishu IDP camps.",
        stats: "3,000+ Beneficiaries"
      }
    ]
  },
  {
    id: "humanitarian",
    title: "Humanitarian & Emergency",
    icon: Users,
    description: "Disaster response, conflict and crisis relief, and long-term resilience building.",
    projects: [
      {
        title: "Emergency Flood Relief",
        description: "Rapid response to flooding crisis, providing tents, blankets, and hygiene kits to displaced households.",
        image: "/images/aid-distribution.jpg",
        stats: "400 Households Assisted"
      },
      {
        title: "Ramadan Food Distribution",
        description: "Annual distribution of food packs to displaced families during the holy month to ensure food security.",
        image: "/images/ramadan-meal-1.jpg",
        stats: "1,500 Families Fed"
      }
    ]
  },
  {
    id: "skills",
    title: "Skills Training",
    icon: Wrench,
    description: "Tailoring, computer training, teacher training, and individual skills development.",
    projects: [
      {
        title: "Vocational Training Center",
        description: "Providing tailoring, computer literacy, and other vocational skills to youth and women for sustainable livelihoods.",
        stats: "200+ Graduates"
      },
      {
        title: "Computer Training Program",
        description: "Digital literacy courses for young people to enhance their employability in the modern workforce.",
        stats: "150+ Students Trained"
      }
    ]
  },
  {
    id: "disaster",
    title: "Disaster Relief",
    icon: Home,
    description: "Prevention and rehabilitation of disaster victims.",
    projects: [
      {
        title: "Community Resilience Building",
        description: "Training communities in disaster preparedness and early warning systems to minimize impact of future crises.",
        stats: "10 Communities Trained"
      },
      {
        title: "Shelter Rehabilitation",
        description: "Rebuilding homes for families displaced by natural disasters and conflicts.",
        stats: "120 Shelters Built"
      }
    ]
  },
  {
    id: "rural",
    title: "Rural Development",
    icon: Droplets,
    description: "Water supply, sanitation, wells, agricultural projects, and animal husbandry.",
    projects: [
      {
        title: "Clean Water Initiative",
        description: "Drilled 5 deep-water wells in drought-affected regions, providing sustainable clean water sources.",
        image: "/images/water-distribution.jpg",
        stats: "10,000+ Beneficiaries"
      },
      {
        title: "Community Iftar Program",
        description: "Hosting community meals to foster unity and ensure no one goes hungry during festive seasons.",
        image: "/images/ramadan-meal-2.jpg",
        stats: "3,000 Meals Served"
      }
    ]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Our Projects" 
        description="Transforming lives through targeted, sustainable initiatives across key sectors."
        image="/images/aid-distribution.jpg"
      />

      {/* Category Overview */}
      <Section className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Project Categories</h2>
          <p className="text-lg text-muted-foreground">
            Click on any category to explore our projects in that area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_CATEGORIES.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
              className={`cursor-pointer bg-card p-8 rounded-2xl shadow-sm border transition-all duration-500 group ${
                activeCategory === category.id 
                  ? "border-accent shadow-xl ring-2 ring-accent/20" 
                  : "border-border/50 hover:shadow-lg hover:border-primary/20"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                activeCategory === category.id 
                  ? "bg-accent text-white" 
                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
              }`}>
                <category.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display text-primary">{category.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{category.description}</p>
              <div className="flex items-center text-sm font-semibold text-accent">
                {activeCategory === category.id ? "Hide Projects" : "View Projects"}
                <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${activeCategory === category.id ? "rotate-90" : ""}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expanded Project Details */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Section background="muted" className="py-16">
              {PROJECT_CATEGORIES.filter(c => c.id === activeCategory).map((category) => (
                <div key={category.id}>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary">{category.title} Projects</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {category.projects.map((project, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50"
                      >
                        {project.image && (
                          <div className="h-56 overflow-hidden img-zoom">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <h4 className="text-xl font-bold font-display text-primary mb-3">{project.title}</h4>
                          <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                          <div className="pt-4 border-t border-border">
                            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                              {project.stats}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </Section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 overlay-gradient z-10" />
          <img src="/images/group-photo.jpg" alt="Team" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Partner With Us</h2>
          <p className="text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Your support can help us expand our reach and impact more lives across Somalia.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-6 text-lg shadow-xl font-semibold"
            onClick={() => window.location.href = "/contact"}
          >
            Get Involved
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
