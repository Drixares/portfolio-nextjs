import Hoverline from "../hoverline";
import LatestProjects from "./latest-projects";

const HeroSection = () => {
    return (
        <div className="mt-32 mx-auto max-w-screen-2xl w-full">
            <div className="mt-32 space-y-5">
                <h2 className="text-2xl font-bold text-neutral-600">
                    Hi, I&apos;m Mattéo Marchelli.
                </h2>
                <h1 className="font-semibold text-7xl text-neutral-950">
                    <p>A fullstack developer that</p>
                    <p>
                        builds good{" "}
                        <span className="relative z-20 leading-tight">
                            experiences
                            <Hoverline />
                        </span>
                    </p>
                </h1>
            </div>
            <LatestProjects />
        </div>
    );
};

export default HeroSection;
