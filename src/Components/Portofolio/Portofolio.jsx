
import React from 'react'
import port1 from '../../assets/poert1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import { FaPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import 'flowbite';
import { Helmet } from 'react-helmet';





function Portofolio() {




    return (
        
            <>
        <Helmet>
            <title>portofolio</title>
        </Helmet>
        <div>
        <h2 className='text-4xl font-bold pt-20 mt-14 text-cyan-950 text-center '>PORTFOLIO COMPONENT


                </h2>
                <div className='flex items-center justify-center mt-4 text-center'>
                    <span className='inline-block border-t border-black line-black'></span>
                    <div className='mx-3 text-cyan-950'>
                        <FaStar />
                    </div>
                    <span className='inline-block border-t border-black line-black'></span>
                </div>
                </div>


        <div className="container m-auto w-[80%] ">
            <div className="flex flex-wrap ">
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port1} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-1" data-modal-toggle="default-modal-1">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-1" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port1} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port2} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-2" data-modal-toggle="default-modal-2">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-2" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port2} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port3} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-3" data-modal-toggle="default-modal-3">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-3" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port3} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port1} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-4" data-modal-toggle="default-modal-4">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-4" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port1} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port2} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-5" data-modal-toggle="default-modal-5">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-5" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port2} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
            <div className=" md:w-1/3  ">
            <div className='relative image m-4   '>
            <img src={port3} className="w-full rounded-lg  cursor-pointer" alt='pic'/>
            <span className='layer justify-center items-center	' data-modal-target="default-modal-6" data-modal-toggle="default-modal-6">
            <i className='text-center text-white text-9xl'><FaPlus /></i>
            </span>
            <div id="default-modal-6" tabindex="-1" aria-hidden="true" class="hidden h-screen overflow-y-auto layer-bg overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
                <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative ">
            <div className="p-4 mt-20 md:p-5 space-y-4">
            <img src={port3} className="w-full" alt='pic'/>
            </div>
        </div>
    </div>
</div>

            </div>
                </div>
           
            </div>
        </div>
        



        </> 
    )
}

export default Portofolio

