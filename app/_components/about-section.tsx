import { Heading2 } from "../../components/heading2";
import { Line } from "./lines";

const AboutSection = () => {
    return (
        <div className="relative z-20 w-full">
            <section className="mx-auto max-w-2xl w-full flex flex-col items-center gap-6">
                <div className="flex items-center justify-between w-full">
                    <Heading2>about.</Heading2>
                    <span className="py-1.5 px-3 bg-[#F8DFCB] rounded-sm">
                        looking for internship
                    </span>
                </div>
                <div className="flex flex-col gap-5 text-neutral-600 text-2xl">
                    <p>
                        A 19 yo freelance & student fullstack developer who
                        loves build things . I&apos;ve been learning web
                        development on my own since 2021. I love designing
                        applications and websites (when i got inspiration).
                    </p>
                    <p>
                        In my free time, i enjoy reading books, working out and
                        playing competitive games.
                    </p>
                    <p>
                        Currently in second year at IIM Digital School in Paris,
                        I&apos;m looking for opportunities to take my skills to
                        the next level.
                    </p>
                </div>
            </section>
            <Line className="absolute -top-80 left-0 w-screen -z-10" />
        </div>
    );
};

export default AboutSection;
