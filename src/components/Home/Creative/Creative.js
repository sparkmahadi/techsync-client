import React from 'react';
import { CgArrowsHAlt } from 'react-icons/cg';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';

const Creative = () => {
    const items = [
        'Learn creative skills to achieve your personal and professional goals.',
        "Tune in and level up at your own pace.",
        "Go from dabbler to master in a matter of hours.",
        "Connect with a global community of curious creatives."
    ]
    return (
        <div className='flex items-center gap-5 justify-around p-20 bg-secondary text-white rounded-lg my-5'>
            <div className='flex items-center gap-5 w-1/3'>
                <h2 className='text-3xl font-semibold text-center leading-snug'>Get Creative with TechSync+</h2>
                <CgArrowsHAlt className='w-16 h-16' />
            </div>
            <ul className='list-disc tracking-wide leading-loose'>
                {
                    items.map((item, i) => <li className='flex gap-3 items-center' key={i}>
                        <MdOutlineFeaturedPlayList className='w-6 h-6' />
                        <p>{item}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Creative;