import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ConnectSection from "./components/ConnectSection";
import projectList from "./ProjectList";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        {projectList.length > 0 && <ProjectsSection />}
        <ConnectSection />
      </div>
      <Footer />
    </div>
  );
}