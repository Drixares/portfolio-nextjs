import { inter } from "@/app/font";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import AdventCalendly from "@/app/assets/images/projects/advent-calendly.png";
import Learn404 from "@/app/assets/images/projects/learn404.png";
import DinoDevinci from "@/app/assets/images/projects/404devinci.png";

const latestsProjects = [
    {
        title: "Advent Calendly",
        image: AdventCalendly,
    },
    {
        title: "Learn404",
        image: Learn404,
    },
    {
        title: "La 404 Devinci",
        image: DinoDevinci,
    },
];

const LatestProjects = () => {
    return (
        <div className="mt-32">
            <p className="uppercase text-neutral-400 text-end mb-2">Latests</p>
            <div className="grid grid-cols-3 gap-2">
                {latestsProjects.map((project) => (
                    <a
                        key={project.title}
                        href="#"
                        className="group bg-neutral-100 rounded aspect-video flex flex-col justify-between overflow-hidden"
                    >
                        <div className="flex items-center justify-between p-4">
                            <p className="text-neutral-500 inline-flex items-center gap-1.5">
                                <span>Project</span>
                                <span className={inter.className}>·</span>
                                <span>{project.title}</span>
                            </p>
                            <div
                                className="flex items-center justify-center rounded-full text-neutral-500
                            size-7 group-hover:bg-white/70 p-1 group-hover:shadow-md  group-hover:text-neutral-900"
                            >
                                <ArrowUpRight size={16} weight="bold" />
                            </div>
                        </div>
                        <div
                            className="mx-auto w-3/4 overflow-hidden rounded translate-y-6 
                        group-hover:scale-105 transition-transform duration-200"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default LatestProjects;
