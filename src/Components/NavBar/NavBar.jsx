import React, { useEffect } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom'; 
import { Link } from 'react-router-dom';


function NavBar() {
    //! useEffect HOOK 
    useEffect(() => {
        const setScroll = () => {
            let currentScroll = $(window).scrollTop(); 
            if (currentScroll > 50) {
                $('.navbar').addClass('navbar-small').removeClass('navbar-large');
            } else {
                $('.navbar').addClass('navbar-large').removeClass('navbar-small');
            }
        };
        $(window).on('scroll', setScroll);
        return () => {
            $(window).off('scroll', setScroll);
        };
    }, []);

    return (
        <div className='navbar  bg-cyan-900 w-full flex justify-between items-center p-9 px-28 fixed top-0 transition-transform duration-300'>
            <h1 className='text-3xl font-bold text-white cursor-pointer'><Link to=''>START FRAMEWORK</Link></h1>
            <ul className='flex space-x-6'>
                <li className=' text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 font-bold '><NavLink to='about'>ABOUT</NavLink></li>
                <li className=' text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 font-bold '><NavLink to='portofolio'>PORTFOLIO</NavLink></li>
                <li className=' text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 font-bold '><NavLink to='contact'>CONTACT</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;
