const ProjectPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    return <p>Project {(await params).slug}</p>;
};

export default ProjectPage;
