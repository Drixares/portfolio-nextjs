import Footer from "@/components/footer";
import { ProjectsGrid } from "@/components/grid";
import Heading1 from "@/components/heading1";

const ProjectsPage = () => {
    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full px-5">
                <div className="space-y-5">
                    <Heading1>projects.</Heading1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        I like building things so there are a few projects that
                        i have been working on in my free time.
                    </p>
                </div>
                <ProjectsGrid />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
