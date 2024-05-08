import React from "react";
import { motion } from "framer-motion";
function CustomHeading({ heading, subHeading }) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.1 }}
        className="font-grace text-3xl text-[#2DA950] mb-2"
      >
        {heading}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 0.5 }}
        className="text-center text-5xl font-semibold"
      >
        {subHeading}
      </motion.h1>
    </div>
  );
}

export default CustomHeading;
