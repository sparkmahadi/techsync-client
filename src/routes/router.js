import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Checkout from '../components/Checkout/Checkout';
import CourseDetails from '../components/Courses/CoursesDetails/CourseDetailsRoot/CourseDetails';
import CourseCategories from '../components/Courses/CoursesRoot/CourseCategories';
import CoursesRoot from '../components/Courses/CoursesRoot/CoursesRoot';
import Home from '../components/Home/Home';
import Login from '../components/Logging/Login/Login';
import Register from '../components/Logging/Register/Register';
import Main from '../layout/Main';
import PrivateRouter from './PrivateRouter';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CoursesRoot></CoursesRoot>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/course-details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/course-category/:level',
                element: <CourseCategories></CourseCategories>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-category/${params.level}`)
            },
            {
                path: '/checkout',
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])