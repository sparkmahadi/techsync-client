import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CoursesRoot from '../components/Courses/CoursesRoot/CoursesRoot';
import Home from '../components/Home/Home';
import Main from '../layout/Main';

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
                element: <CoursesRoot></CoursesRoot>
            }
        ]
    }
])