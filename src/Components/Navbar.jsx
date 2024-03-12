import React from 'react'
import logo from '../assets/fin-logo.png';
// import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    // const  navigation = useNavigate();

    // const change = async () => {
    //     navigation('/signup');
    // }
  return (
    <div>
        <nav className='flex justify-between md:px-10 md:py-7 py-5 px-10 shadow-xl bg-white overflow-x-hidden top-0 sticky'>
        <div className='flex'>
          <img src={logo} alt='logo' className='h-7' />
          <h1 className='mx-3 font-semibold md:text-2xl text-xl'>FinTrackr</h1>
        </div>
        {/* <div>
          <button className='md:text-2xl text-xl font-semibold bg-blue-500 text-white p-2 rounded-xl' onClick={change}>Sign up</button>
        </div> */}
      </nav>
    </div>
  )
}

export default Navbar