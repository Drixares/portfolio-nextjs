import AboutSection from "@/app/_components/about-section";
import ExperiencesSection from "@/app/_components/experiences-section";
import Footer from "@/components/footer";
import HeroSection from "@/app/_components/hero-section";
import { ProjectsSection } from "@/app/_components/projects-section";

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
