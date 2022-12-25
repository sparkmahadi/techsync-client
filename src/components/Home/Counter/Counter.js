import React from 'react';

const Counter = () => {
    const items = [
        {
            count: 34,
            unit: 'K+',
            title: 'Classes'
        },
        {
            count: 800,
            unit: 'K+',
            title: 'Members'
        },
        {
            count: 11,
            unit: 'K+',
            title: 'Teachers'
        },
        {
            count: 4.8,
            unit: '+',
            title: 'Rating'
        },
    ]
    return (
        <div className='flex gap-10 bg-secondary-reverse p-20 rounded-lg items-center justify-center text-white mb-5'>
            {
                items.map((item, i) =>
                    <div className='bg-sky-600 p-3 rounded-lg w-44 text-center' key={i}>
                        <div className='flex justify-center text-green-300 text-3xl font-bold pb-3'>
                            <p>{item.count}</p>
                            <p>{item.unit}</p>
                        </div>
                        <p className='uppercase'>{item.title}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Counter;