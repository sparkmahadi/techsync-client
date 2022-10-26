import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQDetail from './FAQDetail';

const FAQ = () => {
    const questions = useLoaderData();
    return (

        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    {
                        questions.map((question, idx) => <FAQDetail
                            key={idx}
                            question={question}
                        ></FAQDetail>)
                    }
                </div>
            </div>
        </section>

    );
};

export default FAQ;