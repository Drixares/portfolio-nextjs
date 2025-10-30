import Link from "next/link";
import { Heading2 } from "../../components/heading2";
import { Line } from "./lines";

const AboutSection = () => {
	const calculateAge = () => {
		const birthDate = new Date("2005-07-20");
		const today = new Date();
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}

		return age;
	};

	const age = calculateAge();

	return (
		<div className="relative z-20 w-full px-5">
			<section className="mx-auto max-w-2xl w-full flex flex-col items-center gap-6">
				<div className="flex items-center justify-between w-full">
					<Heading2>about.</Heading2>
					{/* <Badge>looking for internship</Badge> */}
				</div>
				<div className="flex flex-col gap-5 text-neutral-600 text-lg md:text-xl">
					<p>
						A {age} yo student & SWE at{" "}
						<Link
							href="https://impulselab.ai"
							target="_blank"
							className="text-neutral-950 hover:underline underline-offset-4 cursor-alias decoration-wavy transition-colors"
						>
							Impulse Lab
						</Link>{" "}
						who loves build things. I&apos;ve been learning web development on
						my own since 2021. I love designing applications and websites (when
						i got inspiration).
					</p>
					<p>
						In my free time, i enjoy reading books, working out and playing
						competitive games.
					</p>
					<p>
						Currently doing my third year at{" "}
						<Link
							href="https://iim.fr"
							target="_blank"
							className="text-neutral-950 hover:underline underline-offset-4 cursor-alias decoration-wavy transition-colors"
						>
							IIM Digital School
						</Link>{" "}
						in Paris, in the coding and digital innovation program.
					</p>
				</div>
			</section>
			<Line className="absolute -top-80 -left-3 w-[102vw] -z-10" />
		</div>
	);
};

export default AboutSection;
