import Footer from "@/components/footer";
import { allProjects, latestsProjects } from "@/constants/projects";
import { notFound } from "next/navigation";
import Heading1 from "@/components/heading1";
import Badge from "@/components/badge";
import StackList from "./_components/stack-list";
import BlocInfo from "./_components/bloc-info";
import Image from "next/image";
import InlineProjectsList from "@/app/_components/inline-projects-list";

const ProjectPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const slug = (await params).slug;
    const project = allProjects.find((project) => project.slug === slug);

    if (!project) return notFound();

    return (
        <div className="space-y-64 mx-auto max-w-screen-2xl w-full">
            <div className="mt-16">
                <div className="space-y-8">
                    <div className="flex items-center gap-8">
                        <Heading1 className="normal-case">
                            {project.title}
                        </Heading1>
                        <Badge>{project.service}</Badge>
                    </div>
                    <p className="text-lg text-neutral-600 max-w-2xl leading-6">
                        {project.description || "Aucune description."}
                    </p>
                    <StackList stack={project.stack} />
                </div>
                <div className="flex items-center justify-end space-x-8 pt-16 pb-6">
                    <BlocInfo project={project} type="links" />
                    <div className="h-11 w-px bg-neutral-300" />
                    <BlocInfo project={project} type="date" />
                    {project.collaborators.length > 0 && (
                        <>
                            <div className="h-11 w-px bg-neutral-300" />
                            <BlocInfo project={project} type="collaborators" />
                        </>
                    )}
                </div>
                <div className="flex flex-col items-center gap-8">
                    {project.images.map((image, idx) => (
                        <Image
                            key={`img::${idx}`}
                            src={image}
                            alt={`Image ${idx + 1} de ${project.title}`}
                        />
                    ))}
                </div>
            </div>
            <InlineProjectsList
                data="more"
                column={2}
                projects={latestsProjects.slice(0, 2)}
            />
            <Footer />
        </div>
    );
};

export default ProjectPage;
