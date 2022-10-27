import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogDetails from './BlogDetails';

const Blog = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div data-aos="fade-down-left" data-aos-duration="1000" className='blog-div'>
            <section>
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center">Blog : (Authentication and React Router)</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        {
                            blogs.map((blog, idx) => <BlogDetails
                                key={idx}
                                blog={blog}
                            ></BlogDetails>)
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Blog;