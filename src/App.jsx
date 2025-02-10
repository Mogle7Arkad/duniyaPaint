import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SubHero from "./components/SubHero";
import ServicesSection from "./components/ServicesSection";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <SubHero />
      <ServicesSection />
      <Portfolio />
    </div>
  );
}

export default App;
