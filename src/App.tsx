import Header from "./components/Header";
import Hero from "./components/Hero";
import Especialidades from "./components/Especialidades";
import About from "./components/About";
import Atendimento from "./components/Atendimento";
import Psiquiatria from "./components/Psiquiatria";
import Acolhimento from "./components/Acolhimento";
import PresencialTelemedicina from "./components/PresencialTelemedicina";
import FAQ from "./components/FAQ";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Sobremim from "./components/sobremim";


export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      <Header />

      <main>
        <Hero />
        <Especialidades />
        <About />
        <Atendimento />
        <Psiquiatria />
        <Acolhimento />
        <PresencialTelemedicina />
        <FAQ />
        <CTAFinal />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}