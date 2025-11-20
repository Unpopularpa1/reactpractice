import React from 'react';
import { Link } from 'react-router-dom';  
import logo from '../assets/images/react logo.png';
const Navbar = () => {
  return (
    <>
        <nav 
            className="bg-red-700 border-b border-red-500 ">
         <div 
            className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div 
                 className="flex h-20 items-center justify-center" >
                <div
                    className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <Link
                       className="flex flex-shrink-0 items-center nr-4"
                       to="/">

                        <img  className="h-10 w-auto"
                              src= {logo} alt="React logo"
                        />
                        <span
                         className='hidden md:block text-white text-2xl font-bold ml-2'>
                         React jobs 
                        </span>
                    </Link>

                    <div className='md:ml-auto'>
                        <div className='flex-space-x-2'>
                           
                        <Link to="/"
                           className='text-white ml-1
                           hover:bg-gray-900 
                           rounded-md px-3 py-2'>Home
                        </Link>

                        <Link to ="/jobs"
                           className='text-white 
                           hover:bg-gray-900
                           rounded-md px-3 py-2' >Jobs
                        </Link>

                        <Link to="/add-job"
                           className='text-white 
                           hover:bg-gray-900 
                           rounded-md px-3 py-2'>Add Job
                        </Link>

                        </div>
                    </div>                    
                </div>
             </div>
         </div>
        </nav>
    </>
  )
}

export default Navbar
