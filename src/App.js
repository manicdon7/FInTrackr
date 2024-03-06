import "tailwindcss/tailwind.css"
import React from 'react';

function Navbar() {
  // Event handlers
  const handleLoginClick = () => {
    // Implement login logic here or navigate to login page
    console.log('Navigating to Login Page...');
  };

  const handleSignupClick = () => {
    // Implement signup logic here or navigate to signup page
    console.log('Navigating to Signup Page...');
  };

  return (
    <header className="flex justify-center items-center px-16 py-3.5 border-b border-solid border-b-gray-200 md:px-5">
      <nav className="flex gap-5 justify-between w-full max-w-[1061px] md:flex-wrap md:max-w-full">
        <BrandLogo />
        <div className="flex gap-5 justify-between text-sm">
          <LoginButton onLoginClick={handleLoginClick} />
          <SignupButton onSignupClick={handleSignupClick} />
        </div>
      </nav>
    </header>
  );
}

function BrandLogo() {
  return (
    <div className="flex gap-4 my-auto text-lg tracking-tight whitespace-nowrap text-neutral-900">
      <img src="your_logo_source_here" alt="FinTrackr Logo" className="my-auto w-4 aspect-square" />
      <div>FinTrackr</div>
    </div>
  );
}

function LoginButton({ onLoginClick }) {
  return (
    <button onClick={onLoginClick} className="my-auto tracking-tight text-center text-blue-600 leading-[196%] hover:bg-blue-100 rounded-md transition duration-200 ease-in-out">
      Log in
    </button>
  );
}

function SignupButton({ onSignupClick }) {
  return (
    <button onClick={onSignupClick} className="flex items-center justify-center px-4 py-2.5 tracking-wide text-white bg-blue-600 rounded-xl leading-none hover:bg-blue-700 transition duration-200 ease-in-out">
      Sign up
    </button>
  );
}

export default Navbar;
