import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Trust from "@/components/Trust";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Reviews />
      <Menu />
      <Experience />
      <Trust />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Index;
