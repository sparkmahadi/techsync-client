import React from 'react';
import Creative from '../Creative/Creative';
import Reviews from '../Reviews/Reviews';
import Hero from './../Hero/Hero';
import Popular from './../Popular/Popular';

const Home = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10'>
            <Hero></Hero>
            <Popular></Popular>
            <Creative></Creative>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;