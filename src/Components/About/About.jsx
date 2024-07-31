import React from 'react';
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
            <title>about</title>
        </Helmet>

        <div className='main-color p-48'>
            <h2 className='text-4xl font-bold pt-5 text-white text-center'>
                ABOUT COMPONENT
            </h2>
            <div className='flex items-center justify-center mt-4 text-center'>
                <span className='inline-block border-t border-white line'></span>
                <div className='mx-3 text-white'>
                    <FaStar />
                </div>
                <span className='inline-block border-t border-white line'></span>
            </div>
            <div className="container mx-auto">
                <div className="row flex flex-wrap">
                    <div className="col-md-6 w-full md:w-1/2 p-4">
                        <div className='text-white'>
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 w-full md:w-1/2 p-4">
                        <div className='text-white'>
                            <p>
                                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default About;
