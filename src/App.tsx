import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { InteractiveCockpit } from "./components/InteractiveCockpit";
import { ContextBarDeepDive } from "./components/ContextBarDeepDive";
import { ProductGallery } from "./components/ProductGallery";
import { PreflightGuard } from "./components/PreflightGuard";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { EcoCalculator } from "./components/EcoCalculator";
import { ReleaseRoadmap } from "./components/ReleaseRoadmap";
import { DownloadCTA } from "./components/DownloadCTA";
import { Footer } from "./components/Footer";

export function App() {
  const scrollToDownload = () => {
    const el = document.getElementById("download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Ambient Cyber-Lime Glow Elements */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-glow-top" />
        <div className="ambient-glow-right" />
        <div className="ambient-glow-left" />
        <div className="ambient-grid" />
      </div>

      {/* Navigation */}
      <Navbar onDownloadClick={scrollToDownload} />

      {/* Main Page Flow */}
      <main id="main-content">
        <Hero />
        <InteractiveCockpit />
        <ContextBarDeepDive />
        <ProductGallery />
        <PreflightGuard />
        <FeaturesGrid />
        <EcoCalculator />
        <ReleaseRoadmap />
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
