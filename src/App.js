import "./App.css";
import CustomHeading from "./components/CustomHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { motion } from "framer-motion";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="py-6 px-4">
      <Header />

      <div
        className="mt-32"
      >
        <CustomHeading
          heading={"Success Stories"}
          subHeading={"Every success journey we've encountered."}
        />
      </div>
        
      <HeroSection />
      <Questions/>
      <Footer />


    </div>
  );
}

export default App;
