import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Footer() {
    return (
       <>
    <div className='flex justify-between text-center bg-cyan-900 p-20 text-white'>
            <div className='flex-1 mx-4 p-4'>
                <h4 className='text-3xl font-medium'>LOCATION</h4>
                <p className='mb-3'>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='flex-1 mx-4 p-4'>
                <h4 className='text-3xl font-medium'>AROUND THE WEB</h4>
                <div className='flex justify-center'>
                    <i className='icon mx-2'><MdFacebook /></i>
                    <i className='icon mx-2'><FaTwitter /></i>
                    <i className='icon mx-2'><FaLinkedin /></i>
                    <i className='icon mx-2'><FaGlobe /></i>
                </div>
            </div>
            <div className='flex-1 mx-4 p-4'>
                <h4 className='text-3xl font-medium'>ABOUT FREELANCER</h4>
                <p className='text-sm pt-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
       </div>
       <div className='bg-cyan-950 text-white text-center p-7'>
        <span>Copyright © Your Website 2021</span>
       </div>
       </> 
    )
}

export default Footer;
