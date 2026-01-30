import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: 1,
    category: "Education",
    title: "Primary School Construction",
    description: "Built a new 12-classroom facility in rural Mogadishu, serving over 500 children who previously lacked access to education.",
    image: "/images/children-school.jpg",
    stats: "500+ Students"
  },
  {
    id: 2,
    category: "Health",
    title: "Mobile Health Clinics",
    description: "Deployed medical teams to remote villages to provide vaccinations, maternal care, and basic health screenings.",
    image: "/images/health-campaign.jpg",
    stats: "2,000+ Patients"
  },
  {
    id: 3,
    category: "Food Security",
    title: "Ramadan Food Distribution",
    description: "Annual distribution of food packs to displaced families during the holy month of Ramadan to ensure food security.",
    image: "/images/ramadan-meal-1.jpg",
    stats: "1,500 Families"
  },
  {
    id: 4,
    category: "WASH",
    title: "Clean Water Initiative",
    description: "Drilled 5 deep-water wells in drought-affected regions, providing sustainable clean water sources.",
    image: "/images/water-distribution.jpg",
    stats: "10,000+ Beneficiaries"
  },
  {
    id: 5,
    category: "Humanitarian",
    title: "Emergency Flood Relief",
    description: "Rapid response to flooding crisis, providing tents, blankets, and hygiene kits to displaced households.",
    image: "/images/aid-distribution.jpg",
    stats: "400 Households"
  },
  {
    id: 6,
    category: "Food Security",
    title: "Community Iftar Program",
    description: "Hosting community meals to foster unity and ensure no one goes hungry during festive seasons.",
    image: "/images/ramadan-meal-2.jpg",
    stats: "3,000 Meals"
  }
];

const CATEGORIES = ["All", "Education", "Health", "Food Security", "WASH", "Humanitarian"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Our Impact" 
        description="Transforming lives through targeted, sustainable initiatives across key sectors."
        image="/images/aid-distribution.jpg"
      />

      <Section>
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? "default" : "outline"}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-6 transition-all ${
                filter === cat ? "bg-primary text-white" : "border-primary/20 text-primary hover:bg-primary/5"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-3 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent">{project.stats}</span>
                    <Button variant="link" className="text-primary p-0 h-auto">Details</Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
