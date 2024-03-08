import React from 'react'
import logo from '../assets/fin-logo.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigation = useNavigate();

    const change = async () => {
        navigation('/signup');
    }

    return (
        <div ><nav className='flex z-10 justify-between md:px-10 md:py-5 py-5 bg-white px-10 shadow-xl overflow-x-hidden top-0 sticky'>
            <div className='flex'>
                <img src={logo} alt='logo' className='h-7' />
                <h1 className='mx-3 font-semibold md:text-2xl text-xl'>itemTrackr</h1>
            </div>
            <div>
                <button className='md:text-2xl text-xl font-semibold bg-blue-500 text-white p-2 rounded-xl' onClick={change}>Sign in</button>
            </div>
        </nav>
            <section className=''>
                <div>
                    <h1 className='text-3xl md:text-5xl text-center pt-10 font-bold'>Create an Account</h1>
                </div>
                <div className='flex justify-center pl-6 md:pl-0'>
                    <h1 className='md:mx-40 text-gray-500 text-left mx-20 md:my-5 my-2'>
                        Security is our top priority. We use multi-factor authentication to keep
                        your account safe.
                    </h1>
                </div>
                <div>
                    <div className='flex justify-center md:flex md:justify-center'>
                        <div className='grid grid-rows-2 gap-10 mt-10 mx-10'>
                            <div className='md:mx-60 md:pl-5'>
                                <input placeholder='  Name' className=' bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
                            </div>
                            <div className='md:mx-60 md:pl-5'>
                                <input placeholder='  Email' className='bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
                            </div>
                            <div className='md:mx-60 md:pl-5'>
                                <input placeholder='  Password' className='bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
                            </div>
                            <div className='md:mx-60 md:pl-5'>
                                <input placeholder='  Password(Confirm)' className='bg-gray-200 p-3 md:w-96 w-80 rounded-lg' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center py-10'>
                        <button className='flex justify-center bg-blue-500 hover:bg-blue-700 md:w-96 w-80 rounded-xl p-2'>Sign in</button>
                    </div>
                    <div className='pb-10'>
                        <a className='flex justify-center py-3 font-semibold text-gray-600' href='/signin'>Already have an Account?<span className='text-gray-600 hover:text-blue-600 px-2'> Sign in</span></a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup