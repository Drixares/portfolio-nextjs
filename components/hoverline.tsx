"use client";

import { motion } from "motion/react";

const Hoverline = () => {
    return (
        <motion.span
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-[40%] 
                    w-[102%] h-[90%] bg-[#F8DFCB] origin-left -rotate-1"
            initial={{
                scaleX: 0,
                translate: "-50% -40%",
                rotate: -1,
            }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        />
    );
};

export default Hoverline;
