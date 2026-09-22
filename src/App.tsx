import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesSection } from "./components/FeaturesSection";
import { ProductGallery } from "./components/ProductGallery";
import { ReleaseRoadmap } from "./components/ReleaseRoadmap";
import { DownloadCTA } from "./components/DownloadCTA";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Ambient Cyber-Lime Glow Elements */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-glow-top" />
        <div className="ambient-glow-right" />
        <div className="ambient-glow-left" />
        <div className="ambient-grid" />
      </div>

      {/* Simplified Top Navigation: Just GitHub and Download */}
      <Navbar />

      {/* Main Flow */}
      <main id="main-content">
        <Hero />
        <FeaturesSection />
        <ProductGallery />
        <ReleaseRoadmap />
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
