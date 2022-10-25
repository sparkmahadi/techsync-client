import React from 'react';
import { Link } from 'react-router-dom';

const AsideCourseTitles = ({ course }) => {
    return (
        <li className='mx-auto py-1'>
            <Link to={`/course-details/${course.id}`}>{course.courseTitle}</Link>
        </li>
    );
};

export default AsideCourseTitles;