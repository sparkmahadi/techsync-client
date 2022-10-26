import React from 'react';

const FAQDetail = ({ question }) => {
    return (
        <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">{question.question}</summary>
            <div className="px-4 pb-4">
                <p>{question.answer}</p>
            </div>
        </details>
    );
};

export default FAQDetail;