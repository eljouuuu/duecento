import courtyardImage from "@/assets/courtyard.jpg";
import { Music, Dog, Users, Leaf } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Peaceful Courtyard",
    description: "Hidden from traffic, surrounded by heritage architecture and lush greenery.",
  },
  {
    icon: Music,
    title: "Perfect Soundtrack",
    description: "Curated playlists that set the mood for conversation or quiet focus.",
  },
  {
    icon: Users,
    title: "Space for Everyone",
    description: "Large seating areas ideal for groups, dates, or solo time.",
  },
  {
    icon: Dog,
    title: "Pet-Friendly",
    description: "Bring your furry friends. They're always welcome here.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-elevated">
              <img
                src={courtyardImage}
                alt="Duecento Café cozy courtyard with string lights and plants"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-accent mb-4">
              The Experience
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              More Than<br />
              <span className="italic">Coffee</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Duecento is a sanctuary. A place to escape, connect, and simply be. 
              Whether you're here for a morning pick-me-up or an evening with friends, 
              the vibe stays warm.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
