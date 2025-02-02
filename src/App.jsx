import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubHero from "./components/SubHero";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SubHero />
      <ServicesSection />
    </div>
  );
}

export default App;
