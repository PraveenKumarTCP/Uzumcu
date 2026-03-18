import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import EquipmentSection from "./components/EquipmentSection";
import ProductCatalog from "./components/ProductCatalog";
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
      <ProductCatalog />
      <AboutSection />
      <EquipmentSection />
      <SuccessSection />
      <InnovationSection />
      <NewsSection />
      <HelpSection />
      <Footer />
    </main>
  );
}

