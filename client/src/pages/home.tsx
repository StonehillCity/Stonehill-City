import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import RulesSection from "@/components/rules-section";
import GallerySection from "@/components/gallery-section";
import CommunitySection from "@/components/community-section";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <RulesSection />
      <GallerySection />
      <CommunitySection />
      <DownloadSection />
      <Footer />
    </div>
  );
}
