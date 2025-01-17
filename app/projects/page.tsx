import Footer from "@/components/footer";
import ProjectsList from "@/components/projects/projects-list";

const ProjectsPage = () => {
    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full">
                <div className="space-y-5">
                    <h1 className="text-7xl lowercase font-light">projects.</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        I like building things so there are a few projects that
                        i have been working on in my free time.
                    </p>
                </div>
                <ProjectsList />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsPage;
