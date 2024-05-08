import { useState } from "react";
import Close from "../icons/Close";
import Warning from "../icons/Warning";
import { Link, useNavigate } from "react-router-dom";
import CustomHeading from "../components/CustomHeading";
function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <div className="py-4 px-4 font-manrope">
      <header className="py-4 px-6 rounded-full items-center flex justify-between">
        <div>
          <img className="w-24" src="/assets/brunel_logo.png" alt="brunel_logo" />
        </div>

        <a
          href="/"
          className="rounded-full border p-3 hover:bg-gray-100 transition-all duration-300"
        >
          <Close></Close>
        </a>
      </header>

      <section className="mt-16 max-w-xl mx-auto">
        <div className="flex flex-col items-center">
          <CustomHeading
            heading={"Registration Form"}
            subHeading={"Start your success journey here!"}
          />

          <div className="mt-16 w-3/4 flex flex-col gap-8">
            <div className="space-y-4">
              <input
                type="text"
                className="bg-gray-100 py-3 px-8 text-lg w-full rounded-full"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="bg-gray-100 py-3 px-8 text-lg w-full rounded-full peer"
                placeholder="Enter your mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="mt-2 peer-invalid:visible invisible">
                <div className="flex gap-1 items-center">
                  <Warning />
                  <p class=" text-[#FF0808] text-sm">
                    Please provide a valid email address.
                  </p>
                </div>
              </div>

              <div className="peer-invalid:cursor-not-allowed cursor-pointer">
                <Link to={"/success"}>
                  <button
                    type="submit"
                    disabled={!email || !name || !validateEmail(email)}
                    className="text-white/90 disabled:opacity-30 disabled:cursor-not-allowed w-full bg-[#1C1C1C] hover:bg-[#4E4E4E] transition-all duration-300 font-semibold text-lg py-4 px-7 text-md rounded-full "
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
