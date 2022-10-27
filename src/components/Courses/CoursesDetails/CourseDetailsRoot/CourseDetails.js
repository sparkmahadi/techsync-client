import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'
import CourseDetailsPoints from '../CourseDetailsPoints/CourseDetailsPoints';
import CourseOverview from '../CourseOverview/CourseOverview';
import { GrDocumentDownload } from 'react-icons/gr'
import { MdFeaturedPlayList } from 'react-icons/md';
import { GiLevelEndFlag, GiPriceTag } from 'react-icons/gi';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [760, 680]
}

const CourseDetails = () => {
    const details = useLoaderData();
    const { id, courseTitle, courseOverview, courseDetails, videoDuration, banner, level, price } = details;
    // console.log(details);

    return (
        <div ref={ref} className="text-white">
            <div className="container px-10 py-6 mx-auto rounded-lg shadow-sm">
                <div data-aos="fade-down" data-aos-duration="1000" className="bg-detail-heading flex items-center justify-between px-5 py-3 rounded-md">
                    <h2 className="text-2xl font-bold text-center md:text-left">{courseTitle}</h2>

                    <Pdf targetRef={ref} options={options} filename="course-details.pdf">
                        {({ toPdf }) =>

                            <div onClick={toPdf} className='btn-bg cursor-pointer flex justify-center max-w-sm items-center border border-white rounded-md'>
                                <p className='px-2 hidden md:block'>Download PDF</p>
                                <button className="bg-white font-bold rounded text-white"><GrDocumentDownload className='h-8 w-8' /></button>
                            </div>

                        }
                    </Pdf>
                </div>

                <div data-aos="fade-left" data-aos-duration="1000" className='my-5 bg-detail-body rounded-md p-5'>
                    <img className='w-ful mx-auto rounded-md' src={banner} alt="" />
                </div>

                <div data-aos="flip-up" data-aos-duration="1000" className="md:flex justify-center mt-3 md:gap-10 bg-detail-body md:p-7 rounded-md">

                    <div data-aos="fade-left" data-aos-duration="1000" className='md:w-2/3 p-3 rounded-md bg-overview'>
                        <h2 className='font-semibold p-2 text-center rounded-md bg-features'>Overview</h2>
                        <div>
                            <div className='p-5'>
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
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1000" className='p-3 mt-5 md:mt-0 rounded-md bg-overview'>
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
                    <Link to={`/course-details/${id}/checkout`} >
                        <button className='btn-bg px-3 md:px-10 py-2 rounded-md text-xl'>
                            Get Premium Access
                        </button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;