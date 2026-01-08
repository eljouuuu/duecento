import spanishLatte from "@/assets/spanish-latte.jpg";
import gelato from "@/assets/gelato.jpg";
import icedCoffee from "@/assets/iced-coffee.jpg";
import brunch from "@/assets/brunch.jpg";

const menuItems = [
  {
    name: "Spanish Latte",
    description: "Our signature. Sweet, creamy, unforgettable.",
    image: spanishLatte,
    highlight: true,
  },
  {
    name: "Artisan Gelato",
    description: "Creamy Italian-style gelato in seasonal flavors.",
    image: gelato,
  },
  {
    name: "Caramel Iced Coffee",
    description: "Smooth cold brew with house-made caramel.",
    image: icedCoffee,
  },
  {
    name: "Brunch Favorites",
    description: "Fresh, hearty plates to start your day right.",
    image: brunch,
  },
];

const Menu = () => {
  return (
    <section id="menu" className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm tracking-widest uppercase text-accent mb-4">
            Signature Offerings
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground">
            Crafted with Care
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg ${
                item.highlight ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`aspect-[4/3] ${
                  item.highlight ? "md:aspect-[21/9]" : ""
                } overflow-hidden`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif text-background mb-2">
                  {item.name}
                </h3>
                <p className="text-background/80 text-sm md:text-base max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Highlight Badge */}
              {item.highlight && (
                <div className="absolute top-6 right-6 px-4 py-2 bg-gold text-gold-foreground text-xs font-medium rounded-full">
                  Fan Favorite
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
