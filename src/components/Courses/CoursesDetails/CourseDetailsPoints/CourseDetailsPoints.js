import React from 'react';
import { HiCheckCircle } from 'react-icons/hi'

const CourseDetailsPoints = ({ point }) => {
    return (
        <li className='flex items-center'>
            <HiCheckCircle className='mr-2'></HiCheckCircle>
            {point}
        </li>
    );
};

export default CourseDetailsPoints;