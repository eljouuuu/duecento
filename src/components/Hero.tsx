import heroImage from "@/assets/hero-cafe.jpg";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const staggerDelay = 1.6; // Start after overlay fades

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Duecento Café courtyard with cozy seating and warm atmosphere"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/40 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-background leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: staggerDelay,
          }}
        >
          Where Coffee Meets<br />
          <span className="italic">Atmosphere</span>
        </motion.h1>
        
        <motion.p
          className="mt-6 md:mt-8 text-lg md:text-xl text-background/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: staggerDelay + 0.2,
          }}
        >
          A cozy, pet-friendly café with unforgettable vibes, great music, and signature drinks.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.43, 0.13, 0.23, 0.96],
            delay: staggerDelay + 0.4,
          }}
        >
          <a
            href="#visit"
            className="px-8 py-4 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-all hover:shadow-warm text-sm md:text-base"
          >
            Visit Us
          </a>
          <a
            href="#menu"
            className="px-8 py-4 bg-transparent border border-background/40 text-background font-medium rounded-full hover:bg-background/10 transition-all text-sm md:text-base"
          >
            View Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: staggerDelay + 0.6,
        }}
      >
        <a
          href="#reviews"
          className="flex flex-col items-center gap-2 text-background/60 hover:text-background/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Discover</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
