import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AsideCourseTitles from './AsideCourseTitles';
import { useState } from 'react';

const Aside = ({ courses }) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://techsync-server.vercel.app/course-categories')
            .then(r => r.json())
            .then(d => setCategories(d));
    }, [])

    return (
        <div className='aside-bg p-5 md:p-7 md:m-5 rounded-md'>
            <div data-aos="flip-left" data-aos-duration="500" className='rounded-md'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Categories</h2>
                <ul className="menu bg-base-100 lg:w-56 rounded-b-md justify-center">

                    {
                        categories.map(category =>
                            <li className='w-full block justify-center' key={category.id}><Link className='mx-auto' to={`/course-category/${category.level}`}>{category.level}</Link></li>)
                    }
                </ul>
            </div>
            <div data-aos="flip-right" data-aos-duration="500" className='rounded-md mt-7'>
                <h2 className='text-center bg-sky-800 text-white p-2 rounded-t-md'>Courses</h2>
                <ul className="menu bg-base-100 lg:w-56 rounded-b-md">
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