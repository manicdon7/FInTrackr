import React from 'react'
import Homeicon from '../assets/Home.png';
import Transactionicon from '../assets/transaction.png'
import Budgetsicon from '../assets/budget.png';
import Goalsicon from '../assets/Goals.png';
import Reportsicon from '../assets/Reports.png'
import Settingsicon from  "../assets/Settings.png";
import Helpicon from '../assets/Help.png';

const Dashside = () => {
  return (
    <div>
        <div className='space-y-3 pt-5 px-5'>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Homeicon} alt='home' />
                        <p>Dashboard</p>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Transactionicon} alt='transaction' />
                        <p>Transaction</p>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Budgetsicon} alt='Budget' />
                        <p>Budgets</p>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Goalsicon} alt='Goals' />
                        <p>Goals</p>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Reportsicon} alt='Reports' />
                        <p>Reports</p>
                    </div>
                    <div className='pt-36'>
                        <button className='py-2 px-8 text-white text-lg bg-blue-600 hover:bg-blue-800 rounded-xl'>Log Out</button>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Settingsicon} alt='settings' />
                        <p>Settings</p>
                    </div>
                    <div className='flex px-2 space-x-3 hover:bg-gray-300 p-2 rounded-xl'>
                        <img src={Helpicon} alt='help' />
                        <p>Help</p>
                    </div>
                </div>
    </div>
  )
}

export default Dashside