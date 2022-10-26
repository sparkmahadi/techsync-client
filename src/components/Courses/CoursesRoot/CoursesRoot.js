import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import CourseRootDetails from './CourseRootDetails';

const CoursesRoot = () => {
    const courses = useLoaderData();
    return (
        <div className="md:flex md:flex-row-reverse">

            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 py-6">


                <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {
                        courses.map(course =>
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
    );
};

export default CoursesRoot;