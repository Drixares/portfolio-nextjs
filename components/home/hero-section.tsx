import LatestProjects from "./latest-projects";

const HeroSection = () => {
    return (
        <div className="mt-32">
            <div className="mt-32 space-y-5">
                <h2 className="text-2xl font-bold text-neutral-600">
                    Hi, I&apos;m Mattéo Marchelli.
                </h2>
                <h1 className="font-semibold text-7xl text-neutral-950">
                    <p>A fullstack developer that</p>
                    <p>
                        builds good{" "}
                        <span
                            className="relative z-20 before:-z-10 before:content-[''] before:absolute before:left-1/2 
                                    before:top-1/2 before:-translate-x-1/2 before:-translate-y-[40%] before:w-[102%] before:h-[90%]
                                    before:bg-[#F8DFCB] before:-rotate-1 leading-tight"
                        >
                            experiences
                        </span>
                    </p>
                </h1>
            </div>
            <LatestProjects />
        </div>
    );
};

export default HeroSection;
