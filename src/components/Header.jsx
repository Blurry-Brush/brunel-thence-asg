import React from "react";

function Header() {
  return (
    <header className="border border-[#F1F1F1] py-4 px-6 rounded-full items-center flex justify-between">
      <div>
        <img className="w-24" src="/assets/brunel_logo.png" alt="" />
      </div>

      <div className="flex gap-3">
        <button className="text-gray-700 hover:bg-[#F1F1F1] font-manrope transition-all duration-300 font-normal py-3 px-7 text-md rounded-full border border-[#F1F1F1]">
          <a href="/signup">Get Projects</a>
        </button>
        <button className="btn-primary font-manrope"><a href="/onboard">Onboard Talent</a></button>
      </div>
    </header>
  );
}

export default Header;
