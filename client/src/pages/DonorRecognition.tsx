import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Award, Star, Heart, Users, Trophy, Crown } from "lucide-react";

const givingCircles = [
  {
    icon: Crown,
    name: "Legacy Circle",
    level: "$100,000+",
    color: "bg-amber-500",
    benefits: [
      "Named recognition on major projects",
      "Annual meeting with CSSS leadership",
      "Personalized impact reports",
      "VIP invitations to all events",
      "Legacy plaque at headquarters"
    ]
  },
  {
    icon: Trophy,
    name: "Founder's Circle",
    level: "$50,000 - $99,999",
    color: "bg-slate-400",
    benefits: [
      "Recognition on program materials",
      "Quarterly calls with program directors",
      "Detailed annual impact report",
      "Priority event invitations",
      "Certificate of appreciation"
    ]
  },
  {
    icon: Award,
    name: "Champion Circle",
    level: "$10,000 - $49,999",
    color: "bg-amber-700",
    benefits: [
      "Recognition in annual report",
      "Semi-annual program updates",
      "Invitation to special events",
      "Personalized thank you letter",
      "CSSS branded merchandise"
    ]
  },
  {
    icon: Star,
    name: "Partner Circle",
    level: "$1,000 - $9,999",
    color: "bg-primary",
    benefits: [
      "Recognition on website",
      "Quarterly newsletter",
      "Invitation to annual event",
      "Certificate of appreciation"
    ]
  },
  {
    icon: Heart,
    name: "Friend Circle",
    level: "Up to $999",
    color: "bg-accent",
    benefits: [
      "Thank you acknowledgment",
      "Quarterly newsletter",
      "Annual impact summary"
    ]
  }
];

const specialRecognition = [
  {
    title: "Named Programs",
    description: "Major donors may have the opportunity to name schools, health facilities, or other infrastructure projects in honor of themselves or loved ones."
  },
  {
    title: "Memorial Gifts",
    description: "Honor the memory of a loved one with a tribute gift. We will notify the family of your thoughtful gesture while keeping the amount private."
  },
  {
    title: "Celebration Gifts",
    description: "Mark birthdays, anniversaries, or other special occasions with a gift in someone's name. A beautiful card will be sent to the honoree."
  },
  {
    title: "Corporate Recognition",
    description: "Corporate partners receive recognition through co-branding opportunities, logo placement, and joint communications about partnership impact."
  }
];

export default function DonorRecognition() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Donor Recognition" 
        description="Celebrating the generosity of supporters who make our work possible."
        image="/images/recognition-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Thank You</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Honoring Our Supporters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every gift to CSSS, regardless of size, represents a commitment to building a better future for Somalia. We are deeply grateful to each and every donor who believes in our mission and invests in our work. Your generosity is the foundation of everything we do.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We believe in recognizing and celebrating the philanthropic spirit of our supporters. Through our donor recognition program, we honor those who have made exceptional commitments to our cause while respecting the wishes of those who prefer to give anonymously.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Giving Circles */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Recognition Levels</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Giving Circles</h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {givingCircles.map((circle, index) => (
            <motion.div
              key={circle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-16 h-16 ${circle.color} rounded-2xl flex items-center justify-center text-white shrink-0`}>
                  <circle.icon className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-display font-bold text-primary">{circle.name}</h3>
                    <span className="inline-block text-sm font-bold text-accent bg-accent/10 px-4 py-2 rounded-full">
                      {circle.level}
                    </span>
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {circle.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Special Recognition */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Special Giving</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Recognition Opportunities</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {specialRecognition.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Privacy Note */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 text-center"
          >
            <Users className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Anonymous Giving</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We fully respect donors who wish to remain anonymous. If you prefer not to be publicly recognized, simply let us know when making your gift. Your privacy will be protected, and your generosity will be no less appreciated.
            </p>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Community of Givers</h2>
            <p className="text-lg text-white/80 mb-8">
              Become part of a dedicated community of supporters who are changing lives in Somalia. Your generosity, at any level, makes you a vital part of our mission.
            </p>
            <a 
              href="/donation-options" 
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Make a Gift Today
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
