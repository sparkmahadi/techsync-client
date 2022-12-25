import { data } from 'autoprefixer';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseRootDetails from '../../Courses/CoursesRoot/CourseRootDetails';

const Popular = () => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/popularCourses')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[]);


    return (
        <div className=''>
            <h3 className='text-xl font-semibold mb-2'>Popular Courses</h3>
            <p className='mb-5'>Learn something completely new or improve your existing skills</p>
            <hr className="mb-5 border-gray-300" />
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {
                        courses.map(course =>
                            <CourseRootDetails
                                key={course.id}
                                course={course}
                            ></CourseRootDetails>)
                    }

                </div>
        </div>
    );
};

export default Popular;