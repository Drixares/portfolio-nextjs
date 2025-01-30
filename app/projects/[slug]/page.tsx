import Footer from "@/components/footer";
import { allProjects } from "@/constants/projects";
import { notFound } from "next/navigation";
import AnimatedImage from "./_components/animated-image";
import Heading1 from "@/components/heading1";

const ProjectPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) return notFound();

    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full">
                <div className="grid grid-cols-2 w-full">
                    <div className="space-y-5">
                        <Heading1>{project?.title}</Heading1>
                        <p className="text-lg text-neutral-600 max-w-2xl">
                            {project?.description || "Aucune description."}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="uppercase text-neutral-400 text-end mb-2">
                            Stack
                        </p>
                        <div></div>
                    </div>
                </div>
                <AnimatedImage image={project.images[0]} alt={project.title} />
            </div>
            <Footer />
        </div>
    );
};

export default ProjectPage;
