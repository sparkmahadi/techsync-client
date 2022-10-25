import React from 'react';
import { Link } from 'react-router-dom';
import AsideCourseTitles from './AsideCourseTitles';

const Aside = ({ courses }) => {
    return (
        <div className='aside-bg md:p-7 md:m-5 rounded-md'>
            <div className='rounded-md'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Categories</h2>
                <ul className="menu bg-base-100 w-56 rounded-b-md">
                    <li className='mx-auto'><Link>Basic</Link></li>
                    <li className='mx-auto'><Link>Intermediate</Link></li>
                    <li className='mx-auto'><Link>Advanced</Link></li>
                </ul>
            </div>
            <div className='rounded-md mt-7'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Courses</h2>
                <ul className="menu bg-base-100 w-56 rounded-b-md">
                    {
                        courses.map(course => <AsideCourseTitles
                            key={course.id} course={course}
                        ></AsideCourseTitles>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Aside;