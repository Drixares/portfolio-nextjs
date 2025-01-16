import AboutSection from "@/components/home/about-section";
import ExperiencesSection from "@/components/home/experiences-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";

export default function Home() {
    return (
        <div className="space-y-64">
            <HeroSection />
            <AboutSection />
            <ExperiencesSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
}
