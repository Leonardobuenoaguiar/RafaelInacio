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

export default function App() {
  return (
    <div className="site-app min-h-screen bg-[#faf8f3]">
      {/*
        Impede que imagens e elementos decorativos maiores que a tela
        criem rolagem horizontal no celular.
      */}
      <style>{`
        html,
        body,
        #root {
          width: 100%;
          min-width: 0;
          max-width: 100%;
          min-height: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden !important;
          overscroll-behavior-x: none;
          background-color: #faf8f3 !important;
          color-scheme: light;
        }

        /* Barra de rolagem discreta para Firefox. */
        html {
          scrollbar-width: thin;
          scrollbar-color: #b9a59c #f3efeb !important;
        }

        /* Barra de rolagem para Chrome, Edge e Safari. */
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          width: 11px;
          height: 11px;
        }

        html::-webkit-scrollbar-track,
        body::-webkit-scrollbar-track {
          background-color: #f3efeb !important;
        }

        html::-webkit-scrollbar-thumb,
        body::-webkit-scrollbar-thumb {
          min-height: 42px;
          border: 3px solid #f3efeb;
          border-radius: 999px;
          background-color: #b9a59c !important;
        }

        html::-webkit-scrollbar-thumb:hover,
        body::-webkit-scrollbar-thumb:hover {
          background-color: #8d746a !important;
        }

        html::-webkit-scrollbar-corner,
        body::-webkit-scrollbar-corner {
          background-color: #f3efeb !important;
        }

        .site-app {
          position: relative;
          width: 100%;
          min-width: 0;
          max-width: 100vw;
          overflow-x: clip;
        }

        @supports not (overflow: clip) {
          .site-app {
            overflow-x: hidden;
          }
        }
      `}</style>

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
