import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Amazing atmosphere, felt like an escape from the city.",
    author: "Sarah M.",
  },
  {
    text: "Spanish Latte 10/10. Best I've ever had.",
    author: "James K.",
  },
  {
    text: "Soothing, calm vibes. Perfect for working or catching up.",
    author: "Maria L.",
  },
  {
    text: "Perfect for hangouts and big groups. So spacious!",
    author: "David R.",
  },
  {
    text: "Pet-friendly and so welcoming. My dog loved it too.",
    author: "Emma T.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-secondary">
      <div className="container-wide">
        {/* Rating */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-gold text-gold"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            Loved by our community
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-background rounded-lg p-8 shadow-soft hover:shadow-warm transition-shadow duration-500 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <blockquote className="text-lg md:text-xl font-serif text-foreground leading-relaxed mb-6">
                "{review.text}"
              </blockquote>
              <p className="text-sm text-muted-foreground">— {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
