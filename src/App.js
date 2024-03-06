import "tailwindcss/tailwind.css"
import React from "react";

function Navbar() {
  return (
    <header className="flex justify-center items-center px-16 py-3.5 border-b border-solid border-b-gray-200 max-md:px-5">
      <nav className="flex gap-5 justify-between w-full max-w-[1061px] max-md:flex-wrap max-md:max-w-full">
        <BrandLogo />
        <div className="flex gap-5 justify-between text-sm">
          <LoginButton />
          <SignupButton />
        </div>
      </nav>
    </header>
  );
}

function BrandLogo() {
  return (
    <div className="flex gap-4 my-auto text-lg tracking-tight whitespace-nowrap text-neutral-900">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0213f0e11fd62ed3ca6089df0ad361f884d773f99c1d29b3a805b85320ad79be?apiKey=b074e2c085af4116b9f692cd99369e40&" alt="FinTrackr Logo" className="my-auto w-4 aspect-square" />
      <div>FinTrackr</div>
    </div>
  );
}

function LoginButton() {
  return (
    <button className="my-auto tracking-tight text-center text-blue-600 leading-[196%]">Log in</button>
  );
}

function SignupButton() {
  return (
    <button className="flex flex-col justify-center px-4 py-2.5 tracking-wide text-white whitespace-nowrap bg-blue-600 rounded-xl leading-[150%]">
      <div className="justify-center bg-blue-600 aspect-[2.52]">Sign up</div>
    </button>
  );
}

export default Navbar;