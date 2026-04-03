import React from 'react';

const Steps = () => {
    return (
        <div className='bg-[#f9fafc] pb-28 pt-28'>
            <div className='text-center pb-10'>
                <h1 className='text-5xl font-bold mb-4'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='md:flex w-8/12 mx-auto gap-4'>
                {/* card-1 */}
                <div className='border mb-6 border-gray-400 bg-white rounded-2xl p-4'>
                    <div className='flex justify-end'>
                        <h1 className='bg-[#7524F8] text-white font-semibold w-6 text-center rounded-full '>01</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center space-y-2 py-10'>
                        <div className='bg-[#F3E7FE] p-4 rounded-full'>
                            <img src="user.png" alt="" />
                        </div>
                        <h1 className='text-2xl font-bold'>Create Account</h1>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                {/* card-2 */}
                <div className='border mb-6 border-gray-400 bg-white rounded-2xl p-4'>
                    <div className='flex justify-end'>
                        <h1 className='bg-[#7524F8] text-white font-semibold w-6 text-center rounded-full '>02</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center space-y-2 py-8'>
                        <div className='bg-[#F3E7FE] p-4 rounded-full'>
                            <img src="package.png" alt="" />
                        </div>
                        <h1 className='text-2xl font-bold'>Choose Product</h1>
                        <p>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>

                {/* card-3 */}
                <div className='border mb-6 border-gray-400 bg-white rounded-2xl p-4'>
                    <div className='flex justify-end'>
                        <h1 className='bg-[#7524F8] text-white font-semibold w-6 text-center rounded-full '>03</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center text-center space-y-2 py-8'>
                        <div className='bg-[#F3E7FE] p-4 rounded-full'>
                            <img src="rocket.png" alt="" />
                        </div>
                        <h1 className='text-2xl font-bold'>Start Creating</h1>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;