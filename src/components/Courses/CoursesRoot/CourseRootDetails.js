import React from 'react';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GiDuration } from 'react-icons/gi';
import './CourseRootDetails.css'
import { Link } from 'react-router-dom';

const CourseRootDetails = ({ course }) => {
    const { id, courseTitle, img, videoDuration } = course;
    return (
        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 card-p-bg rounded shadow-xl px-1 pt-1">
            <div className="p-5 bg-card">
                <div className="">
                    <img className='rounded-md' src={img} alt="" />
                </div>
                <div className="my-2 font-bold flex justify-center items-top rounded-md">
                    <MdOutlineDriveFileRenameOutline className='w-6 h-6 mr-2' />
                    <h3>{courseTitle}</h3>
                </div>
                <div className="text-sm flex justify-center items-top rounded-md mt-2">
                    <GiDuration className='w-5 h-5 mr-2' />
                    <p>Duration: {videoDuration} Hours</p>
                </div>
                <div className='btn nav-bg text-md flex justify-center items-center text-white rounded-md mt-2 px-2 py-1'>
                    <FaLongArrowAltRight className='w-5 h-5 mr-2' />
                    <button className='text-white'>
                        <Link to={`/course-details/${id}`}>
                            See Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseRootDetails;