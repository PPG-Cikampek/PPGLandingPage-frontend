import React, { useState } from 'react';

import Carousel from '../../shared/Components/UIElements/Carousel'

import AnimatedComponent from '../../shared/Components/Animation/AnimatedComponent';

import logo from "../../assets/logos/ppg.png";
import { useEffect } from 'react'


const LandingPageView = () => {
    const [showComponent, setShowComponent] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setShowComponent(true), 2000);
        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <div id='landing-page' className='flex flex-col'>
            <div id='brand' className='pt-12 w-full min-h-[768px] md:min-h-[1024px]'>
                {showComponent && (

                    <div className='pt-6 md:pt-12'>
                        <AnimatedComponent>
                            <Carousel showDots={false} />
                        </AnimatedComponent>
                        <div className='my-12 p-4 flex flex-col items-center text-center md:text-start md:flex-row md:justify-center md:items-start gap-8'>
                            <AnimatedComponent animationType='slideInLeft'>
                                <div className=''>
                                    <img src={logo} alt="" className='w-64 h-auto' />
                                </div>
                            </AnimatedComponent>
                            <div className='flex flex-col gap-4 text-white '>
                                <AnimatedComponent animationType='slideInRight'>
                                    <h1 className='text-2xl font-semibold'>PPG Cikampek</h1>
                                </AnimatedComponent>
                                <AnimatedComponent animationType='slideInRight'>
                                    <p className='max-w-96'>PPG, singkatan dari Penggerak Pembina Generus, merupakan tim bertugas menggerakkan, mensupervisi, dan mendukung pelaksanaan pembinaan generus. </p>
                                </AnimatedComponent>
                                <AnimatedComponent animationType='slideInRight'>
                                    <h2 className='text-2xl font-semibold'>Visi</h2>
                                </AnimatedComponent>
                                <AnimatedComponent>
                                    <ul>
                                        <li>Visi 1</li>
                                        <li>Visi 2</li>
                                        <li>Visi 3</li>
                                    </ul>
                                </AnimatedComponent>
                            </div>
                        </div>

                    </div>
                )}
            </div>
            <div className='max-w-6xl mt-6 mx-auto flex flex-col gap-4'>

                <AnimatedComponent animationType='zoomIn'>
                    <section className="bg-white rounded-md p-6 shadow-sm">
                        <h2 className="text-xl font-semibold mb-4">Judul 1</h2>
                        <p className="text-gray-800">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, assumenda. Numquam ut itaque assumenda autem incidunt quos ad reiciendis rem nihil? Ex facilis neque architecto quas? Iusto explicabo veniam totam?
                        </p>
                    </section>
                </AnimatedComponent>

                {/* <AnimatedComponent>
                    <section className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
                        <p className="text-gray-800">
                            Each section maintains its own background with backdrop blur,
                            creating a frosted glass effect over the stacked background images.
                        </p>
                    </section>
                </AnimatedComponent>

                <AnimatedComponent>
                    <section className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
                        <p className="text-gray-800">
                            The background images are stacked with decreasing opacity,
                            creating depth while maintaining content legibility.
                        </p>
                    </section>
                </AnimatedComponent> */}


            </div>
        </div>
    )
}

export default LandingPageView;