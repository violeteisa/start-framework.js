import React from 'react';
import mySvg from '../../assets/avataaars.svg'; 
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function Home() {

    return (
        <>
        <Helmet>
            <title>home</title>
        </Helmet>

            <div className='main-color text-center pt-40'>
                <div className='flex justify-center items-center'>
                    <img src={mySvg} className='mb-3 w-60' alt="Avatar" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold pt-5 text-white '>START FRAMEWORK</h2>
                    <div className='flex items-center justify-center mt-4'>
                        <span className='inline-block border-t border-white line'></span>
                        <div className='mx-3 text-white'>
                            <FaStar />
                        </div>
                        <span className='inline-block border-t border-white line'></span>
                    </div>
                    <p className='pb-14 text-white mt-2'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    );
}

export default Home;
