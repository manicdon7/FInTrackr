import React from 'react'
import Navbar from '../Components/Navbar'
import Dashside from '../Components/Dashside';
import Groceriesicon from '../assets/Groceries.png';
import Restauranticon from '../assets/Restaurant.png';
import Gasicon from '../assets/Gas.png';
import Paycheckicon from '../assets/paycheck.png';
import Knife from '../assets/knife.png';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='md:flex'>
                <div className='hidden md:block'>
                <Dashside />
                </div>
                <div className='px-3 pt-5 md:pt-0 md:px-20'>
                    <div>
                        <h1 className='font-bold text-3xl py-3'>Welcome Back, Customer name</h1>
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-3 py-3'>
                        <div className='border-2 rounded-xl p-2 border-gray-500 hover:bg-blue-500 hover:text-white md:h-20 md:w-48'>
                            <p className='text-center font-bold text-3xl'>$2500</p>
                            <p className='text-gray-600  text-center'>Speandables</p>
                        </div>
                        <div className='border-2 rounded-xl p-2 border-gray-500 hover:bg-blue-500 hover:text-white md:h-20 md:w-48'>
                            <p className='text-center font-bold text-3xl'>$100</p>
                            <p className='text-gray-600  text-center'>Saved</p>
                        </div>
                        <div className='border-2 rounded-xl p-2 border-gray-500 hover:bg-blue-500 hover:text-white md:h-20 md:w-48'>
                            <p className='text-center font-bold text-3xl'>$15000</p>
                            <p className='text-gray-600  text-center'>Credit Limit</p>
                        </div>
                        <div className='border-2 rounded-xl p-2 border-gray-500 hover:bg-blue-500 hover:text-white md:h-20 md:w-48'>
                            <p className='text-center font-bold text-3xl'>$3000</p>
                            <p className='text-gray-600  text-center'>Invested</p>
                        </div>
                    </div>
                    <section>
                        <div>
                            <div>
                                <h1 className='text-3xl font-semibold py-3'>Recent transaction</h1>
                            </div>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5'>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Groceriesicon} alt='groceries' />
                                        <p>Groceries</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>Jan 29</p>
                                </div>
                                <div>
                                    <h1><span className='text-red-400'>-$</span>100</h1>
                                </div>
                            </article>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5 '>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Restauranticon} alt='Restaurant' />
                                        <p>Restaurant</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>Jan 28</p>
                                </div>
                                <div>
                                    <h1><span className='text-red-400'>-$</span>50</h1>
                                </div>
                            </article>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5 '>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Gasicon} alt='Gas' />
                                        <p>Gas</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>Jan 27</p>
                                </div>
                                <div>
                                    <h1><span className='text-red-400'>-$</span>40</h1>
                                </div>
                            </article>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5 '>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Paycheckicon} alt='paycheck' />
                                        <p>Paycheck</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>Jan 26</p>
                                </div>
                                <div>
                                    <h1><span className='text-green-400'>+$</span>2000</h1>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section>
                        <div>
                        <div>
                            <h1 className='text-3xl font-semibold py-3'>Budgets</h1>
                        </div>
                        <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5'>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Groceriesicon} alt='groceries' />
                                        <p>Groceries</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>$1,000 out of $1,200</p>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1>80</h1>
                                    </div>
                                </div>
                            </article>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5'>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Knife} alt='knife' />
                                        <p>Restuarants</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>$3,00 out of $4,00</p>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1>75</h1>
                                    </div>
                                </div>
                            </article>
                            <article className='flex justify-between py-2 hover:bg-gray-200 rounded-xl px-5'>
                                <div className='px-2'>
                                    <div className='flex space-x-3'>
                                        <img src={Gasicon} alt='Gas' />
                                        <p>Gas</p>
                                    </div>
                                    <p className='px-9 text-gray-600'>$2,00 out of $3,00</p>
                                </div>
                                <div>
                                    <div className=''>
                                        <h1>67</h1>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;