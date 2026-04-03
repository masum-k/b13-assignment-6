import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='text-center pt-24 pb-10'>
                <h1 className='text-5xl font-bold mb-4'>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='md:flex w-8/12 gap-4 container mx-auto'>
                <div className="card mb-6 w-96 bg-[#f9fafc] rounded-2xl shadow-sm">
                    <div className="card-body">
                        <div>
                            <h2 className="text-xl font-bold">Starter</h2>
                            <span className="text-lg">Perfect for getting started</span>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$0</span>/Month</span>
                        <ul className="mt-3 flex flex-col flex-1 gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] btn-block text-white font-bold rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>
                <div className="card mb-6 w-96 text-white rounded-2xl bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] shadow-sm">
                    <div className="card-body">
                        <div className='absolute -top-3 left-32 rounded-full text-[#bb4d00] w-24 text-center bg-[#FEF3c6]'>
                            <h2>Most Popular</h2>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Starter</h2>
                            <span className="text-lg">Perfect for getting started</span>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$29</span>/Month</span>
                        <ul className="mt-3 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advance analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-block rounded-full">
                                <span className='bg-clip-text font-bold text-transparent bg-linear-to-r from-[#6A2BF8] to-[#8D18F9]'>
                                    Start Pro Trial
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card mb-6 w-96 bg-[#f9fafc] rounded-2xl shadow-sm">
                    <div className="card-body">
                        <div>
                            <h2 className="text-xl font-bold">Starter</h2>
                            <span className="text-lg">Perfect for getting started</span>
                        </div>
                        <span className="text-xl"><span className='text-3xl font-bold'>$99</span>/Month</span>
                        <ul className="mt-3 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-linear-to-r from-[#6A2BF8] to-[#8D18F9] btn-block text-white font-bold rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;