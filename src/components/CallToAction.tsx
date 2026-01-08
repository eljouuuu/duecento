import { MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CallToAction = () => {
  return (
    <section
      id="visit"
      className="section-padding bg-primary text-primary-foreground"
    >
      <div className="container-narrow text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
            Come for the Coffee.<br />
            <span className="italic">Stay for the Vibe.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
            Your table is waiting. Find us in the heart of the old town, where 
            the coffee is hot and the atmosphere is unforgettable.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-medium rounded-full hover:bg-background/90 transition-all hover:shadow-warm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="tel:+15552000200"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-primary-foreground/30 text-primary-foreground font-medium rounded-full hover:bg-primary-foreground/10 transition-all"
            >
              Call Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hours */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/50">
              Open Daily · 8AM – 10PM
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
