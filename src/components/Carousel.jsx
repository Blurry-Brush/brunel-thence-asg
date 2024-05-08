import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRight from "../icons/ArrowRight";
let data = [
  "Enhance fortune 50 company's insights teams research capabilities",
  "at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu",
  "lacus viverra vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <div className="ml-10 px-40 mt-28">
        <motion.div
          initial={{ opacity: 0 , x: -200}}
          animate={{ opacity: 1, x:0 }}
          exit={{ opacity: 0 , x: 200}}
          key={index}
          transition={{ ease: "easeOut", duration: 1 }}
          className="h-72"
        >
          <h1 className="text-3xl font-semibold leading-snug">{data[index]}</h1>
        </motion.div>

        <div className="flex gap-2 mt-10">
          <div
            onClick={() => setIndex(0)}
            className={`h-2 w-2 ${
              index == 0 ? "bg-[#2DA950]" : "bg-[#E4E3E3]"
            } rounded-full cursor-pointer hover:bg-[#CAD0CB]`}
          ></div>
          <div
            onClick={() => setIndex(1)}
            className={`h-2 cursor-pointer w-2 ${
              index == 1 ? "bg-[#2DA950]" : "bg-[#E4E3E3]"
            } rounded-full hover:bg-[#CAD0CB]`}
          ></div>
          <div
            onClick={() => setIndex(2)}
            className={`h-2 cursor-pointer w-2 ${
              index == 2 ? "bg-[#2DA950]" : "bg-[#E4E3E3]"
            } rounded-full hover:bg-[#CAD0CB]`}
          ></div>
        </div>
        <div className="mt-12">
            <button className="btn-primary px-10 py-6"><h1 className="flex gap-3 items-center">
                Explore More <span> <ArrowRight /> </span>
            </h1></button>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Carousel;
