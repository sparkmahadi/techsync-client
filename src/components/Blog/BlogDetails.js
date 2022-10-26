import React from 'react';

const BlogDetails = ({ blog }) => {
    const { question, answer } = blog;

    return (
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline font-semibold">{question}</summary>
            <div className="px-4 pb-4 text-sm">
                {
                    Array.isArray(answer) ? answer.map(ans => {
                        return (
                            <div className='mb-2'>
                                <p p className='font-semibold' > {ans?.heading}</p>
                                <p>{ans?.article}</p>
                            </div >
                        )
                    })
                        :
                        <p>{answer}</p>
                }
            </div >
        </details >
    );
};

export default BlogDetails;