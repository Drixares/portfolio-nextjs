"use client";

import { NAVLINKS, ROUTES } from "@/constants/page";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type LinkRef = HTMLElement | null;

const TopNavigation = () => {
    const pathname = usePathname();

    const [linkRefs] = useState<LinkRef[]>([]);
    const [idx, setIdx] = useState<number | null>(null);
    const hoveredLink = linkRefs[idx ?? -1]?.getBoundingClientRect();
    const [navRef, setNavRef] = useState<HTMLElement | null>(null);
    const navRect = navRef?.getBoundingClientRect();

    return (
        <nav className="sticky top-0 isolate z-50 flex items-center justify-center gap-4 pt-10 px-20">
            <div className="hidden md:flex flex-1" />
            <div
                onMouseLeave={() => setIdx(null)}
                className="relative flex rounded-lg border border-neutral-200 bg-white/80 p-1 shadow-md backdrop-blur-md"
                ref={(el) => setNavRef(el!)}
                style={{ transform: "none" }}
            >
                {ROUTES.map(({ label, path }, idx) => (
                    <Link
                        href={path}
                        key={path}
                        ref={(el: HTMLAnchorElement | null): void => {
                            linkRefs[idx] = el;
                        }}
                        onPointerEnter={() => setIdx(idx)}
                        className={cn(
                            `text-neutral-500 hover:text-neutral-950 px-3 py-1`,
                            pathname === path && "text-neutral-950"
                        )}
                    >
                        {label}
                    </Link>
                ))}
                <AnimatePresence>
                    {hoveredLink && (
                        <motion.div
                            className="absolute left-0 -z-10 h-7 rounded-sm bg-neutral-200/70 backdrop-blur"
                            initial={{
                                left: hoveredLink.left - (navRect?.left || 0),
                                height: hoveredLink.height,
                                width: hoveredLink.width,
                                opacity: 0,
                            }}
                            animate={{
                                left: hoveredLink.left - (navRect?.left || 0),
                                height: hoveredLink.height,
                                width: hoveredLink.width,
                                opacity: 1,
                            }}
                            exit={{
                                left: hoveredLink.left - (navRect?.left || 0),
                                height: hoveredLink.height,
                                width: hoveredLink.width,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.17,
                            }}
                        />
                    )}
                </AnimatePresence>
            </div>
            <NavLinks />
        </nav>
    );
};

function NavLinks() {
    return (
        <div className="hidden md:flex flex-1 items-center justify-end gap-3">
            {NAVLINKS.map(({ label, path }) => (
                <Link
                    key={path}
                    href={path}
                    className="text-neutral-400 hover:text-neutral-950 hover:underline 
                        underline-offset-4 cursor-alias decoration-wavy transition-colors"
                    target="_blank"
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}

export default TopNavigation;
