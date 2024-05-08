import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Check from "../icons/Check";
import CustomHeading from "../components/CustomHeading";
import { motion } from "framer-motion";

function Success() {
  const navigate = useNavigate();
  const [time, setTime] = useState(5);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      navigate("/");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-4 px-4">
      <header className="py-4 px-6 rounded-full items-center flex justify-between">
        <div>
          <img
            className="w-24"
            src="/assets/brunel_logo.png"
            alt="brunel_logo"
          />
        </div>
      </header>

      <section className="mt-16 max-w-xl mx-auto">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1}}
          >
            <Check className="w-20 h-20 text-[#28B246]" />
          </motion.div>
          <CustomHeading
            heading={"Success Submitted"}
            subHeading={"Congratulations"}
          />
          <h3 className="text-center text-gray-600 mt-5 text-xl">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates.
          </h3>
        </div>
        <div className="text-center mt-48">
          Redirecting you to Homepage in{" "}
          <span className="font-bold">{time} seconds</span>
        </div>
      </section>
    </div>
  );
}

export default Success;
