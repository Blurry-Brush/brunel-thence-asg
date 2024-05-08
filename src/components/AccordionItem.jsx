import React, { useState } from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div className="w-full accordion font-manrope">
      <motion.div
        layout
        transition={{ layout: { duration: 1, type: "spring", bounce: 0.3 } }}
      >
        <div
          className="accordion-title p-1 flex justify-between cursor-pointer w-full text-[20px] font-semibold"
          onClick={() => setIsActive(!isActive)}
        >
          <motion.div
            transition={{ layout: { duration: 2, type: "spring" } }}
            layout
            className="max-w-[70%]"
          >
            {title}
          </motion.div>
          <motion.div layout="position" className="lg:text-[32px] font-medium">
            {isActive ? "-" : "+"}
          </motion.div>
        </div>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[15px] text-[#617275]"
          >
            {content}
          </motion.div>
        )}
        <hr class="h-px mt-2 mb-8 bg-[#D7D7D7] border-0"></hr>
      </motion.div>
    </motion.div>
  );
};

export default AccordionItem;
