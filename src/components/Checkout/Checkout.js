import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BiRename, BiVideoRecording } from 'react-icons/bi'
import { GiLevelEndFlag, GiPriceTag } from 'react-icons/gi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const [bought, setBought] = useState(false);
    const { courseTitle, price, videoDuration, level } = useLoaderData();

    const handlePurchase = event => {
        event.currentTarget.disabled = true;
        console.log('button clicked');
        setBought(true);
        toast.success(`Congratulations! You've enrolled for the course "${courseTitle}"`)
    }
    return (
        <div className='min-h-custom'>
            <div className="bg-gray-200 text-white max-w-xl mx-auto md:my-10 rounded-md">
                <ToastContainer position='top-center' />
                <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm">
                    <div className="bg-detail-heading p-5 md:p-10 rounded-md">
                        <div className='flex items-center mb-2'>
                            <BiRename className='w-6 h-6' />
                            <h2 className="ml-2 text-md md:text-2xl font-bold">Course Name: {courseTitle}</h2>
                        </div>
                        <div className='flex items-center mb-2'>
                            <BiVideoRecording className='w-6 h-6' />
                            <h3 className="ml-2 text-sm md:text-md">Video Duration: {videoDuration} Hours</h3>
                        </div>
                        <div className='flex items-center mb-2'>
                            <GiLevelEndFlag className='w-6 h-6' />
                            <h3 className="ml-2 text-sm md:text-md">Level: {level}</h3>
                        </div>
                        <div className='flex items-center mb-2'>
                            <GiPriceTag className='w-6 h-6' />
                            <h3 className="ml-2 text-sm md:text-md">Price: {price} TK</h3>
                        </div>
                        {
                            bought ? <button onClick={handlePurchase} className='nav-bg block mx-auto p-2 rounded-md mt-10 text-sm md:text-md'>Purchased</button>
                                :
                                <button onClick={handlePurchase} className='nav-bg block mx-auto p-2 rounded-md mt-10 text-sm md:text-md'>Confirm Purchase</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;