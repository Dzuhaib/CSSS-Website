import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Heart, GraduationCap, Stethoscope, Droplets, Users, Gift, Calendar, Building2 } from "lucide-react";

const donationAreas = [
  {
    icon: GraduationCap,
    title: "Education Fund",
    description: "Support schools, teachers, and students. Your donation provides textbooks, builds classrooms, and funds scholarships for deserving students.",
    impact: "$50 provides school supplies for one student for a year"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Fund",
    description: "Fund mobile clinics, medicine, and health worker training. Help bring quality healthcare to communities that need it most.",
    impact: "$100 provides medicine for a family for six months"
  },
  {
    icon: Droplets,
    title: "Clean Water Fund",
    description: "Build wells and water systems that provide safe drinking water. Clean water prevents disease and transforms community health.",
    impact: "$500 helps construct a community water point"
  },
  {
    icon: Users,
    title: "Emergency Relief Fund",
    description: "Respond rapidly to droughts, floods, and conflict. Your gift ensures we can act immediately when crisis strikes.",
    impact: "$75 provides emergency food for a family for one month"
  },
  {
    icon: Heart,
    title: "Orphan Sponsorship",
    description: "Provide comprehensive care for orphaned children including education, healthcare, nutrition, and emotional support.",
    impact: "$30/month supports one orphan with full care"
  },
  {
    icon: Gift,
    title: "Where Most Needed",
    description: "Allow us to direct your gift to the area of greatest need. This flexibility helps us respond to emerging priorities.",
    impact: "100% goes to our highest-priority programs"
  }
];

const givingMethods = [
  {
    icon: Heart,
    title: "One-Time Donation",
    description: "Make an immediate impact with a single gift of any amount. Every contribution, large or small, makes a difference."
  },
  {
    icon: Calendar,
    title: "Monthly Giving",
    description: "Join our community of monthly donors for sustained impact. Regular giving helps us plan ahead and reach more people."
  },
  {
    icon: Building2,
    title: "Corporate Giving",
    description: "Partner with us through your company. We offer corporate giving programs, matching gifts, and cause-related campaigns."
  },
  {
    icon: Gift,
    title: "In-Kind Donations",
    description: "Donate goods, supplies, or services. We accept medicines, educational materials, and other essential items."
  }
];

export default function DonationOptions() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <PageHeader 
        title="Donation Options" 
        description="Choose how you want to make a difference. Every gift transforms lives in Somalia."
        image="/images/donation-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Give Today</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Your Generosity Changes Lives</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you donate to CSSS, you're not just giving money—you're providing hope, opportunity, and dignity to families across Somalia. We are committed to using every dollar wisely and transparently, ensuring your gift creates maximum impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Whether you want to support a specific program or give us flexibility to respond where needs are greatest, there's a giving option that's right for you. Explore our donation options below and find a cause that speaks to your heart.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Donation Areas */}
      <Section className="py-20 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Choose Your Impact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Program Funds</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <area.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">{area.description}</p>
              <div className="bg-accent/5 p-4 rounded-xl">
                <p className="text-sm font-medium text-accent">{area.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Ways to Give */}
      <Section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Methods</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">Ways to Give</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {givingMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-primary/5 p-8 rounded-2xl flex gap-6"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                <method.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-2">{method.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{method.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How to Donate */}
      <Section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">How to Donate</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-2xl border border-border/50 shadow-lg"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To make a donation, please contact our office directly. Our team will guide you through the process and answer any questions you may have about our programs or how your donation will be used.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted/30 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2">Email</h4>
                <a href="mailto:donations@csss-somalia.org" className="text-accent hover:underline">donations@csss-somalia.org</a>
              </div>
              <div className="bg-muted/30 p-6 rounded-xl">
                <h4 className="font-bold text-primary mb-2">Phone</h4>
                <a href="tel:+252611234567" className="text-accent hover:underline">+252 61 123 4567</a>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Make Your Gift Today</h2>
            <p className="text-lg text-white/80 mb-8">
              There's never been a more important time to give. Contact us today to learn more about how your donation can make a lasting difference in the lives of Somali families.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 rounded-full transition-all hover:-translate-y-1"
            >
              Contact Us to Donate
            </a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
