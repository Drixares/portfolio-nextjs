"use client";

import { motion } from "motion/react";

const Hoverline = () => {
    return (
        <motion.span
            className="absolute left-1/2 top-1/2 -z-10 w-[102%] h-[90%] bg-[#F8DFCB] "
            style={{
                transform: "translateX(-50%) translateY(-40%) rotate(-1deg)",
                transformOrigin: "center left",
            }}
            initial={{ width: 0 }}
            animate={{ width: "102%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        />
    );
};

export default Hoverline;
