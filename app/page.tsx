import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import SuccessSection from "./components/SuccessSection";
import InnovationSection from "./components/InnovationSection";
import NewsSection from "./components/NewsSection";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <SuccessSection />
      <InnovationSection />
      <NewsSection />
      <HelpSection />
      <Footer />
    </main>
  );
}
