import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import CourseRootDetails from './CourseRootDetails';

const CourseCategories = () => {
    const [courses, setCourses] = useState([]);
    const selectedCourses = useLoaderData();
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(r => r.json())
            .then(d => setCourses(d))
    }, [])
    return (
        <div>
            <div className="bg-gray-200 md:flex md:flex-row-reverse">

                <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 py-6">


                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            selectedCourses.map(course =>
                                <CourseRootDetails
                                    key={course.id}
                                    course={course}
                                ></CourseRootDetails>)
                        }
                    </div>
                </div>

                <div className='px-5 md:px-0 py-10 md:py-0'>
                    <Aside courses={courses}></Aside>
                </div>

            </div>
        </div>
    );
};

export default CourseCategories;