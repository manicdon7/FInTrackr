import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import logo from '../assets/fin-logo.png';
import { useNavigate } from 'react-router-dom';
// import bg from '../assets/back.png';

const firebaseConfig = {
  apiKey: "AIzaSyCMXaB940_VXIHPPfGl3HOCtxEqfFJ-UuY",
  authDomain: "fintrackr-ec9d9.firebaseapp.com",
  projectId: "fintrackr-ec9d9",
  storageBucket: "fintrackr-ec9d9.appspot.com",
  messagingSenderId: "1073499838666",
  appId: "1:1073499838666:web:c7ab507d2daff1a8f83c33",
  measurementId: "G-L0JTWBMMCB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
  const navigation = useNavigate();

  const change = async () => {
    navigation('/signup');
  } 

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      console.log(auth);
    }
  };

  return (
    <div className=''>
      <nav className='flex justify-between md:px-10 md:py-5 py-5 px-10 shadow-xl bg-white overflow-x-hidden top-0 sticky'>
        <div className='flex'>
          <img src={logo} alt='logo' className='h-7' />
          <h1 className='mx-3 font-semibold md:text-2xl text-xl'>FinTrackr</h1>
        </div>
        <div>
          <button className='md:text-2xl text-xl font-semibold bg-blue-500 text-white p-2 rounded-xl' onClick={change}>Sign up</button>
        </div>
      </nav>
      <div className='pb-10 -z-10'>
        <div className='flex mt-36 justify-center text-2xl md:text-4xl font-bold'>
          <h1>Welcome Back to FinTrackr</h1>
        </div>
        <div>
          <div className='flex justify-center'>
          <h1 className='md:mx-40 text-gray-500 text-left mx-20 md:my-5 my-2'>
            Security is our top priority. We use multi-factor authentication to keep
            your account safe.
          </h1>
          </div>
          <div className='flex justify-center md:flex md:justify-center'>
            <div className='grid grid-rows-2 gap-10 mt-10 mx-10'>
              <div className='md:mx-60 md:pl-5'>
                <input placeholder='  Email' className=' bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
              </div>
              <div className='md:mx-60 md:pl-5'>
                <input placeholder='  Password' className='bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
              </div>
            </div>
          </div>
          <div>
            <div className='flex justify-center py-5 md:mx-60 md:pr-40'>
              <input type='checkbox'/><span className="ml-2">Remember this account</span>
            </div>
            <div className='flex justify-center'>
              <button className='flex justify-center bg-blue-500 hover:bg-blue-700 md:w-96 w-80 rounded-xl p-2'>Sign in</button>
            </div>
            <h1 className='flex justify-center text-gray-500 text-xl py-2'>OR</h1>
            <div className='flex justify-center'>
            <button onClick={signInWithGoogle} className='flex justify-center bg-red-500 hover:bg-red-700 md:w-96 w-80 rounded-xl p-2'>Sign in with Google</button>
            </div>
            <div>
            <a className='flex justify-center py-3 font-semibold text-gray-600 hover:text-gray-900' href='/'>Forgot your email or password?</a>
            </div>
            <div>
            <a className='flex justify-center py-3 font-semibold text-gray-600' href='/signup'>New to FinTrackr?<span className='text-gray-600 hover:text-blue-600 px-2'> Create an account</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login