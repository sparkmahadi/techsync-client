import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import CourseDetailsPoints from '../CourseDetailsPoints/CourseDetailsPoints';
import CourseOverview from '../CourseOverview/CourseOverview';
import { GrDocumentDownload } from 'react-icons/gr'
import { MdFeaturedPlayList } from 'react-icons/md';
import { GiLevelEndFlag, GiPriceTag } from 'react-icons/gi';

const CourseDetails = () => {
    const details = useLoaderData();
    const { id, img, courseTitle, courseOverview, courseDetails, videoDuration, banner, level, price } = details;
    console.log(details);
    return (
        <div className="bg-gray-200 text-white">
            <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm">
                <div className="bg-detail-heading md:flex items-center md:justify-between px-5 py-3 rounded-md">
                    <h2 className="text-2xl font-bold text-center md:text-left">{courseTitle}</h2>
                    <div className='btn-bg cursor-pointer flex justify-center max-w-sm mx-auto items-center border border-white rounded-md'>
                        <p className='px-2'>Download PDF</p>
                        <Link to='/checkout' className="bg-white font-bold rounded text-white"><GrDocumentDownload className='h-8 w-8' /></Link>
                    </div>
                </div>

                <div className='my-5 bg-detail-body rounded-md p-5'>
                    <img className='w-ful mx-auto rounded-md' src={banner} alt="" />
                </div>

                <div className="md:flex justify-center mt-3 md:gap-10 bg-detail-body md:p-7 rounded-md">

                    <div className='md:w-2/3 p-3 rounded-md bg-overview'>
                        <h2 className='font-semibold p-2 text-center rounded-md bg-features'>Overview</h2>
                        <ul>
                            {
                                courseOverview.map((overView, idx) =>
                                    <CourseOverview
                                        key={idx}
                                        overView={overView}
                                    ></CourseOverview>
                                )
                            }
                        </ul>
                    </div>

                    <div className='p-3 rounded-md bg-overview'>
                        <h2 className='font-semibold p-2 text-center rounded-md bg-features'>Features </h2>
                        <ul>
                            {
                                courseDetails.map((point, idx) =>
                                    <CourseDetailsPoints
                                        key={idx} point={point}
                                    ></CourseDetailsPoints>)
                            }
                        </ul>
                        <h2 className='font-semibold p-2 text-center rounded-md bg-features mt-5'>Details </h2>
                        <ul className='my-2'>
                            <li className='flex'>
                                <MdFeaturedPlayList className='h-5 w-5 mr-2' />
                                <p>Video Duration: {videoDuration} Hours</p>
                            </li>
                            <li className='flex'>
                                <GiLevelEndFlag className='h-5 w-5 mr-2' />
                                <p>Level: {level}</p>
                            </li>
                            <li className='flex'>
                                <GiPriceTag className='h-5 w-5 mr-2' />
                                <p>Price: {price}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button className='btn-bg px-3 md:px-10 py-2 rounded-md text-xl'>
                        <Link to={`/course-details/${id}/checkout`}>
                            Get Premium Access
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;