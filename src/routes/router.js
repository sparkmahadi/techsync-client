import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../components/Blog/Blog';
import Checkout from '../components/Checkout/Checkout';
import CourseDetails from '../components/Courses/CoursesDetails/CourseDetailsRoot/CourseDetails';
import CourseCategories from '../components/Courses/CoursesRoot/CourseCategories';
import CoursesRoot from '../components/Courses/CoursesRoot/CoursesRoot';
import ErrorRoute from '../components/ErrorRoute/ErrorRoute';
import FAQ from '../components/FAQ/FAQ';
import Login from '../components/Logging/Login/Login';
import Register from '../components/Logging/Register/Register';
import ResetPassword from '../components/Logging/ResetPassword/ResetPassword';
import Profile from '../components/Profile/Profile';
import Main from '../layout/Main';
import PrivateRouter from './PrivateRouter';
import Payment from './../components/Payment/Payment';
import Home from '../components/Home/Home/Home';

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <ErrorRoute></ErrorRoute>
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
                path: '/course-details/:id/checkout',
                element: <PrivateRouter><Checkout></Checkout></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/course-details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
                loader: () => fetch('http://localhost:5000/faq')
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('http://localhost:5000/blog')
            },
            {
                path: '/reset-password',
                element: <ResetPassword></ResetPassword>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])