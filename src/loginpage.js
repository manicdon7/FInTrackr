import React from 'react';

const SignInButton = ({ text, onClick, iconSrc, iconAlt }) => (
  <button
    className="flex justify-center items-center px-16 py-2.5 mt-3.5 max-w-full font-bold tracking-wide whitespace-nowrap bg-blue-600 rounded-xl leading-[150%] text-white w-[511px] max-md:px-5 cursor-pointer"
    onClick={onClick}
  >
    {iconSrc && <img src={iconSrc} alt={iconAlt} className="self-start w-5 aspect-square mr-2" />}
    {text}
  </button>
);

const App = () => (
  <div className="flex flex-col justify-center bg-white">
    <header className="flex flex-col w-full bg-white max-md:max-w-full">
      <div className="flex gap-5 justify-between px-10 py-3.5 w-full font-bold whitespace-nowrap border-b border-solid border-b-gray-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4 my-auto text-lg tracking-tight text-neutral-900">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e95cca3038a028279f12806f5c3ea70a9c76d1ff8ff5205b4d4eeef130a621?apiKey=b074e2c085af4116b9f692cd99369e40&" alt="FinTrackr Logo" className="my-auto w-4 aspect-square" />
          <div>FinTrackr</div>
        </div>
        <SignInButton text="Sign up"/>
      </div>
    </header>
    <main className="flex flex-col items-center px-20 py-12 w-full text-sm text-slate-500 max-md:px-5 max-md:max-w-full">
      <section className="flex flex-col px-4 mt-3.5 max-w-full text-base w-[511px]">
        <h1 className="text-3xl font-bold tracking-tighter text-neutral-900 max-md:max-w-full">Welcome back to FinTrackr</h1>
        <p className="mt-4 text-sm leading-5 max-md:mr-2 max-md:max-w-full">Security is our top priority. We use multi-factor authentication to keep your account safe.</p>
        <label className="justify-center items-start py-4 pr-16 pl-4 mt-11 whitespace-nowrap bg-gray-100 rounded-xl leading-[150%] max-md:pr-5 max-md:mt-10 max-md:max-w-full" htmlFor="emailInput">
          Email
          <input id="emailInput" type="email" className="sr-only" />
        </label>
        <label className="justify-center items-start py-4 pr-16 pl-4 mt-14 whitespace-nowrap bg-gray-100 rounded-xl leading-[150%] max-md:pr-5 max-md:mt-10 max-md:max-w-full" htmlFor="passwordInput">
          Password
          <input id="passwordInput" type="password" className="sr-only" />
        </label>
      </section>
      <SignInButton text="Sign in" />
      <div className="mt-3 text-center leading-[150%]">OR</div>
      <SignInButton
        text="Sign in with Google"
        iconsrc="https://cdn.builder.io/api/v1/image/assets/TEMP/57721d347e18149d73d7ee39a49766d71956af81180f2e23eb5e486d7173600e?apiKey=b074e2c085af4116b9f692cd99369e40&"iconAlt="Google sign-in"
      />
      <div className="mt-16 mb-8 text-center whitespace-nowrap leading-[150%] max-md:mt-10">Forgot your email or password?</div>
    </main>
  </div>
);

export default App;