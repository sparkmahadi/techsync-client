import React from 'react';

const CourseOverview = ({ overView }) => {
    return (
        <li className='list-disc list-outside mb-2'>
            {overView}
        </li>
    );
};

export default CourseOverview;