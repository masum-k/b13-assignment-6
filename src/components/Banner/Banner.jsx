import React from 'react';

const Banner = () => {
    return (
        <div className="hero container mx-auto mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="banner.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className='md:w-2/4'>
                    <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
                    <p className="py-6">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                        Explore Products
                    </p>
                    <div>
                        <button className="btn bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] mr-2 btn-primary rounded-3xl text-white">Explore Products</button>
                        <button className="btn btn-outline rounded-3xl btn-primary text-[#6A2BF8]">Watch Demo</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;