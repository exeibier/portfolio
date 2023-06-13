import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
    return (
        <section>
            <div className="bg-black text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-4xl dark:text-blue-500 tracking-loose">Software Developer</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Xabier Hernández
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">
                            Software Developer specialized in React Js, Next Js, and Angular.<br/>
                            Committed to staying updated with the latest front-end technologies and delivering high-quality code.</p>
                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div className="inline-block mt-28 hidden xl:block" >
                                <Image src="/img/exe.jpg" width={200} height={200} alt='Image' className='rounded-full'/>
                            </div>
                            <div className="inline-block mt-24 md:mt-0 p-8 md:p-0">
                                <Image src="/img/exe3.jpeg" width={300} height={300} alt='Image' className='rounded-full' />
                            </div>
                            <div className="inline-block mt-28 hidden lg:block">
                                <Image src="/img/exe2.jpeg" width={200} height={200} alt='Image' className='rounded-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
