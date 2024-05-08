import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#F5F5F5] rounded-[35px] w-full px-8 py-10 mt-5">
      <div className="flex justify-between">
        <div>
          <h1> © Talup 2023. All rights reserved </h1>
        </div>

        <div className="flex gap-4">
          <Link to={"/privacy_policy"}>
            <h1 className="text-[#1C1C1C] underline">Terms & Conditions</h1>
          </Link>
          <Link to={"/privacy_policy"}>
            <h1 className="text-[#1C1C1C] underline">Privacy Policy</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
