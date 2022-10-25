import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import CourseRootDetails from './CourseRootDetails';

const CoursesRoot = () => {
    const courses = useLoaderData();
    return (
        <div className="bg-gray-200 md:flex">

            <Aside courses={courses}></Aside>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">


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
        </div>
    );
};

export default CoursesRoot;