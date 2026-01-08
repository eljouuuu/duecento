import { Heart, MessageCircle, Shield } from "lucide-react";

const Trust = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <p className="text-sm tracking-widest uppercase text-accent mb-4">
          Our Promise
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Warmth in Every Detail
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          We believe great coffee is just the beginning. It's the friendly faces, 
          the attention to your comfort, and the commitment to making every visit better.
        </p>

        {/* Trust Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="p-8 rounded-lg bg-secondary">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-3">Genuine Care</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team truly cares about your experience. That's not a script—it's who we are.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-soft">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-3">We Listen</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your feedback shapes us. Every suggestion is heard, every concern addressed.
            </p>
          </div>

          <div className="p-8 rounded-lg bg-secondary">
            <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center mx-auto mb-6 shadow-soft">
              <Shield className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-3">Always Improving</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're never done growing. Each day is a chance to serve you better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
