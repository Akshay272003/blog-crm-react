// import { useState } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const clickHandleMenu = ()=>{
        const navCont = document.querySelector('#nav-cont');
        navCont.classList.toggle('hidden');
    }
    

    return (
        <div className="w-full md:w-3/4 md:mx-auto md:mt-1">
            <nav className="flex p-3 bg-teal-600 text-white md:rounded-xl justify-between items-center">
                <span className="self-center text-lg md:text-2xl whitespace-nowrap dark:text-white font-bold cursor-pointer">Am Blogs</span>

                <ul id='nav-cont'  className='flex bg-teal-600 transition ease-in duration-500'>
                    <li>
                        <Link to="/" className='font-semibold m-1'>Home</Link>
                    </li>
                    <li>
                        <Link to="/create" className='mx-1 rounded-xl text-teal-700 bg-teal-100 p-2 font-semibold'>New Blog</Link>
                    </li>
                </ul>

                <div id='burger' onClick={clickHandleMenu} className='block md:hidden cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>



                </div>

            </nav>
        </div>

    );
}

export default Navbar;