import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="home-div">
                    <a
                        href="/"
                        aria-label="Go Home"
                        title="Logo"
                        className="inline-block mb-2"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                    </a>
                    <h5 className="mb-4 text-2xl md:text-4xl lg:text-5xl font-extrabold text-center">
                        Boost Your Career with
                        <br />
                        <span className="inline-block pt-2">
                            TechSync+
                        </span>
                    </h5>
                    <p className="mb-6 text-gray-900 text-center">
                        TechSync+ provides the informations on different courses related to the skills you wanna acquire very soon. Find the courses updated here and set the plans and schedules for achieving the goal. Generally, We provide the outlines for your planning and management of courses in the site. Contact us for detailed instructions.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center justify-center gap-4">
                        <Link to='/courses'
                            className="text-white text-sm text-center nav-bg p-2 rounded duration-300 hover:text-sky-400"
                        >
                            Explore Courses
                        </Link>
                        <Link to='/register'
                            className="text-white text-sm text-center nav-bg p-2 rounded duration-300 hover:text-sky-400"
                        >
                            Create an account
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="technology.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;