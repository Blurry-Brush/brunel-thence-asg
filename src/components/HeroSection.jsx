import React from "react";
import Rocket from "../icons/Rocket";
import Carousel from "./Carousel";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="grid grid-cols-2 mt-10 gap-10 mb-20 font-manrope">
      <section className="w-full p-10 flex justify-center relative">
        <div className="w-fit h-fit">
          <img
            className="w-[450px] object-fill rounded-3xl"
            src="/assets/Hero_girl.png"
            alt="hero_girl"
          ></img>
        </div>

        <motion.div>
          <motion.div
            style={{ animationFillMode: "forwards" }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={"hover"}
            variants={{
              hover: {
                scale: 1.05,
              },
            }}
            transition={{
              type: "spring",
              bouncy: 0.4,
              duration: 1.2,
              scale: { duration: 1, ease: "backInOut" },
            }}
            viewport={{ once: true, amount: 0.8 }}
            className="py-8 px-6 min-w-72 w-72 h-auto bg-[#002E18] right-0 absolute bottom-0 rounded-3xl shadow-2xl"
          >
            <div className="space-y-7 ">
              <motion.h1
                initial={{ scale: 0.85 }}
                variants={{
                  hover: {
                    scale: 1,
                  },
                }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="text-white text-6xl font-bold origin-top-left"
              >
                {" "}
                $0.5{" "}
                <span className="text-xl text-[#A6A3A0] font-semibold ">
                  MILLION
                </span>{" "}
              </motion.h1>

              <h2 className="text-[#A6A3A0] font-normal text-lg leading-5">
                Reduced client expenses by saving on hiring and employee costs.
              </h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={"hover2"}
            variants={{
              hover2: {
                scale: 1.05,
              },
            }}
            transition={{
              type: "spring",
              bouncy: 0.4,
              duration: 1.2,
              scale: { duration: 1, ease: "backInOut" },
            }}
            viewport={{ once: true }}
            className="py-8 px-6 w-60 h-56 shadow-lg bg-white absolute left-0 top-28 rounded-3xl"
          >
            <div className="space-y-7 ">
              <motion.div
                initial={{ scale: 0.85 }}
                variants={{
                  hover2: {
                    scale: 1,
                  },
                }}
                transition={{ duration: 1, ease: "backInOut" }}
                className="relative w-full h-fit origin-top-left"
              >
                <img
                  className="h-20 w-20 absolute -left-7 -top-10"
                  src="/assets/sparkle.png"
                  alt="sparkles"
                />

                <h1 className="font-semibold text-6xl text-black">40%</h1>
              </motion.div>
              <h2 className="text-[#A6A3A0] font-normal text-lg leading-5">
                Achieved reduction in project execution time by optimising team
                availability.
              </h2>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bouncy: 0.4, duration: 1.2 }}
          viewport={{ once: true, amount: 0.8 }}
          className="py-2 px-4 shadow-xl left-12 bottom-20 bg-white absolute rounded-full flex justify-between items-center gap-4"
        >
          <div className="bg-gray-200 h-fit w-fit p-3 rounded-full">
            <Rocket />
          </div>

          <div className="flex flex-col pr-5">
            <h1 className="text-2xl font-semibold">10 DAYS</h1>
            <h3 className="text-[#A6A3A0]">Staff Deployment</h3>
          </div>
        </motion.div>
      </section>
      <section className="w-full">
        <Carousel />
      </section>
    </section>
  );
}

export default HeroSection;
