import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const SLIDES: Slide[] = [
  {
    image: "/images/children-school.jpg",
    title: "Education for All",
    subtitle: "Empowering the Next Generation",
    description: "We provide educational opportunities and resources to ensure access to quality education for vulnerable children across Somalia.",
  },
  {
    image: "/images/water-distribution.jpg",
    title: "Clean Water Access",
    subtitle: "Water, Sanitation & Hygiene",
    description: "Our WASH programs improve access to clean water, sanitation facilities, and promote better hygiene practices in communities.",
  },
  {
    image: "/images/health-campaign.jpg",
    title: "Healthcare Services",
    subtitle: "Building Healthier Communities",
    description: "Delivering essential medical services, health campaigns, and emergency care to underserved areas across the region.",
  },
  {
    image: "/images/aid-distribution.jpg",
    title: "Humanitarian Relief",
    subtitle: "Responding to Crisis",
    description: "Providing vital food security, disaster relief, and sustainable livelihood support to families in need.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-50%" : "50%",
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" data-testid="hero-slider">
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 overlay-gradient z-10" />
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent z-20" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black/40 to-transparent z-20" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30 pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block px-4 py-1.5 bg-accent/90 text-white text-sm font-semibold rounded-full mb-6 backdrop-blur-sm"
            >
              {SLIDES[current].subtitle}
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] drop-shadow-2xl">
              {SLIDES[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
              {SLIDES[current].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button 
                  size="lg" 
                  data-testid="button-hero-projects"
                  className="rounded-full px-8 py-6 text-lg bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-0.5 font-semibold"
                >
                  Explore Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  data-testid="button-hero-contact"
                  className="rounded-full px-8 py-6 text-lg border-2 border-white/40 text-white hover:bg-white/15 hover:border-white/60 backdrop-blur-md transition-all duration-300"
                >
                  Get Involved
                </Button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              data-testid={`slider-dot-${index}`}
              className={`slider-dot ${current === index ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <div className="absolute bottom-12 right-6 md:right-12 flex gap-2 z-40">
          <Button
            variant="ghost"
            size="icon"
            onClick={prev}
            data-testid="button-slider-prev"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={next}
            data-testid="button-slider-next"
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-6 md:left-12 z-40 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium tracking-widest uppercase vertical-text">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
