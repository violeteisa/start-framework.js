import React from 'react'
import { FaStar } from "react-icons/fa";
import { Helmet } from 'react-helmet';
function Contact() {
    return (
<>
        <Helmet>
            <title>contact</title>
        </Helmet>
        <div>
            <div  className='mb-10'>
 <h2 className='text-4xl  font-bold pt-20 mt-14 text-cyan-950 text-center   '>CONTACT SECTION</h2>
<div className='flex items-center justify-center mt-4 text-center'>
                    <span className='inline-block border-t border-black line-black'></span>
                    <div className='mx-3 text-cyan-950'>
                        <FaStar />
                    </div>
                    <span className='inline-block border-t border-black line-black'></span>
                </div>
                </div>
                <div className='container m-auto'>
                <div className="relative h-11 w-1/2 container m-auto mb-14">
                    <input placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:placeholder-opacity-100 placeholder-opacity-0 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:after:scale-x-0 peer-placeholder-shown:after:border-transparent peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        userName
                    </label>
                </div>
                <div className="relative h-11 w-1/2 container m-auto mb-14">
                    <input placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:placeholder-opacity-100 placeholder-opacity-0 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:after:scale-x-0 peer-placeholder-shown:after:border-transparent peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        userAge
                    </label>
                </div>
                <div className="relative h-11 w-1/2 container m-auto mb-14">
                    <input placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:placeholder-opacity-100 placeholder-opacity-0 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:after:scale-x-0 peer-placeholder-shown:after:border-transparent peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        userEmail
                    </label>
                </div>
                <div className="relative h-11 w-1/2 container m-auto mb-10">
                    <input placeholder=""
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 placeholder-shown:placeholder-opacity-100 placeholder-opacity-0 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                    <label
                        className="after:content[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:after:scale-x-0 peer-placeholder-shown:after:border-transparent peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        userPassword
                    </label>
                </div>
                <div>
                </div>
                <button  className="btn mb-4 text-white main-color  mx-80 rounded-xl px-4 py-2"> send Message </button>
            </div>
        </div>
        </>
    )
}


export default Contact
