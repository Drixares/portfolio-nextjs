import Footer from "@/components/footer";
import { ProjectsGrid } from "@/components/globals/grid";

const WritingsPage = () => {
    return (
        <div className="space-y-64">
            <div className="mt-16 mx-auto max-w-screen-2xl w-full">
                <div className="space-y-5">
                    <h1 className="text-7xl lowercase font-light">writings.</h1>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        Since the begining of 2025 I&apos;ve been writing some
                        articles on my blog and journaling my life.
                    </p>
                </div>
                <ProjectsGrid />
            </div>
            <Footer />
        </div>
    );
};

export default WritingsPage;
