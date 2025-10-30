import Footer from "@/components/footer";
import { WritingsGrid } from "@/components/grid";
import Heading1 from "@/components/heading1";

const WritingsPage = () => {
	return (
		<div className="space-y-64">
			<div className="mt-16 mx-auto max-w-7xl w-full">
				<div className="space-y-5">
					<Heading1>writings.</Heading1>
					<p className="text-lg text-neutral-600 max-w-2xl">
						Since the begining of 2025 I&apos;ve been writing some articles on
						my blog and journaling my life.
					</p>
				</div>
				<WritingsGrid />
			</div>
			<Footer />
		</div>
	);
};

export default WritingsPage;
