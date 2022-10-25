import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import CourseDetailsPoints from '../CourseDetailsPoints/CourseDetailsPoints';
import CourseOverview from '../CourseOverview/CourseOverview';
import { GrDocumentDownload } from 'react-icons/gr'

const CourseDetails = () => {
    const details = useLoaderData();
    const { id, img, courseTitle, courseOverview, courseDetails, videoDuration, banner } = details;
    // console.log(details);
    return (
        <div className="bg-gray-200 text-white">
            <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm">
                <div className="bg-detail-heading flex items-center justify-between md:px-5 py-3 rounded-md">
                    <h2 className="text-2xl font-bold">{courseTitle}</h2>
                    <div className='btn-bg cursor-pointer flex gap-2 border border-white py-1 px-2 rounded-md'>
                        <p>Download PDF</p>
                        <Link to='/checkout' className="btn bg-white px-2 py-1 font-bold rounded text-white"><GrDocumentDownload /></Link>
                    </div>
                </div>

                <div className=''>
                    <img className='w-full' src={banner} alt="" />
                </div>

                <div className="flex justify-center mt-3 md:gap-10 bg-detail-body md:p-7 rounded-md">

                    <div className='md:w-2/3 md:p-3 rounded-md bg-overview'>
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

                    <div className='md:p-3 rounded-md bg-overview'>
                        <h2 className='font-semibold p-2 text-center rounded-md bg-features'>Features </h2>
                        <ul>
                            {
                                courseDetails.map((point, idx) =>
                                    <CourseDetailsPoints
                                        key={idx} point={point}
                                    ></CourseDetailsPoints>)
                            }
                        </ul>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button className='btn-bg md:px-10 py-2 rounded-md text-xl'>
                        <Link to='/checkout'>
                            Get Premium Access
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;