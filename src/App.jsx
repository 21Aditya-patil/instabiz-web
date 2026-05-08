import Navbar from "../src/components/Navbar"
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Industries from "./components/Industries";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Services  from "./components/Services";
import Techstack from "./components/Techstack";
import Why from "./components/Why";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden text-white bg-gradient-to-br from-[var(--bg1)] via-[var(--bg2)] to-[var(--bg3)]">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Portfolio />
      <Techstack />
      <Industries />
      <Why />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;