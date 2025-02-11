import Heading1 from "@/components/heading1";
import Peep from "@/components/peep";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
    return (
            <div className="mb-16 mt-2 md:my-32 mx-auto max-w-screen-2xl w-full px-5 flex flex-col md:flex-row items-center justify-center gap-x-10">
                {/* Peep illustration with hover effect */}
                <div className="relative size-64 md:size-96 overflow-hidden group">
                    <Peep className="size-full object-cover animate-float" />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center md:items-start justify-center max-md:text-center">
                    <Heading1 className="capitalize flex flex-col items-center md:items-start justify-center">
                        <span className="text-8xl md:text-9xl font-bold">
                            404
                        </span>
                        <span className="text-2xl font-medium text-neutral-600">
                            Oops ! Page not found
                        </span>
                    </Heading1>

                    <p className="mt-4 text-neutral-500 text-center md:text-left max-w-md">
                        The page you are looking for seems to have disappeared into cyberspace. Don&apos;t worry, you can always go back to the homepage!
                    </p>


                    <Link
                        href="/"
                        className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-full mt-8 
                            flex items-center gap-2 group"
                    >
                       <ArrowLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform duration-300" /> Go back to homepage
                    </Link>
                </div>
            </div>
    );
}

export default NotFound;