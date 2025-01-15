"use client";

import { ROUTES } from "@/constants/page";
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
        <nav
            className="sticky top-0 isolate z-10 flex items-center justify-center py-5 px-1"
            onMouseLeave={() => setIdx(null)}
        >
            <div
                className="relative flex rounded-lg border border-neutral-200 bg-white/70 p-1 shadow-md backdrop-blur-md"
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
                            `text-neutral-600 hover:text-neutral-950 px-3 py-1`,
                            pathname === path && "text-neutral-950"
                        )}
                    >
                        {label}
                    </Link>
                ))}
                <AnimatePresence>
                    {hoveredLink && (
                        <motion.div
                            className="absolute left-0 -z-10 h-7 rounded bg-neutral-100 backdrop-blur"
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
        </nav>
    );
};

export default TopNavigation;
