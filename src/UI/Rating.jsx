import React from 'react';

const Rating = () => {
    return (
        <div className='md:flex text-center justify-center py-8 font-bold mt-12 text-white bg-linear-to-r from-[#622FF7] to-[#9415FA]'>
            <div>
                <h1 className='text-6xl'>
                    50K+
                </h1>
                <p>Active Users</p>
            </div>
            <div className='md:border-x md:px-20 md:mx-48'>
                <h1 className='text-6xl'>
                    200+
                </h1>
                <p>Premium Tools</p>
            </div>
            <div>
                <h1 className='text-6xl'>
                    4.9
                </h1>
                <p>Rating</p>
            </div>
        </div>
    );
};

export default Rating;