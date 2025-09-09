'use client';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className='overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46'>
                <div className='mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0'>
                    <div className='flex lg:items-center lg:gap-8 xl:gap-32.5'>
                        <div className=' md:w-1/2'>
                            {/* <div className='relative mb-24'>
                                <Image
                                    src='/images/passport_pic.jpg'
                                    alt='Richard Durazo'
                                    width={240}
                                    height={240}
                                    className='rounded-full object-cover mx-auto'
                                />
                                    <div className='absolute inset-0 rounded-full bg-black/20'></div> 

                            </div> */}
                            <div className='relative mb-24 w-[240px] h-[240px] mx-auto perspective'>
                                <div className='relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180'>
                                    {/* Front Side (Image) */}
                                    <div className='absolute inset-0 rounded-full overflow-hidden backface-hidden'>
                                        <Image
                                            src='/images/passport_pic.jpg'
                                            alt='Richard Durazo'
                                            fill
                                            className='object-cover'
                                        />
                                        <div className='absolute inset-0 rounded-full bg-black/20'></div>
                                    </div>
                                    {/* Back Side (Overlay / Message) */}
                                    <div className='absolute inset-0 rounded-full bg-black/50 flex items-center justify-center text-white backface-hidden rotate-y-180'>
                                        <span className='text-lg'>
                                            Hi, I’m Richard!
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h1 className='mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero '>
                                Software Engineer {'   '}
                                <span className='relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark '>
                                    Los Angeles, CA
                                </span>
                            </h1>
                            <p>
                                I’m Richard — a software engineer with a passion
                                for thoughtful design, clean code, and the kind
                                of user experiences that just feel right.
                            </p>
                        </div>

                        <div className='animate_right hidden md:w-1/2 lg:block'>
                            <div className='relative 2xl:-mr-7.5'>
                                <Image
                                    src='/images/shape/shape-01.png'
                                    alt='shape'
                                    width={46}
                                    height={246}
                                    className='absolute -left-11.5 top-0'
                                />
                                <Image
                                    src='/images/shape/shape-02.svg'
                                    alt='shape'
                                    width={36.9}
                                    height={36.7}
                                    className='absolute bottom-0 right-0 z-10'
                                />
                                <Image
                                    src='/images/shape/shape-03.svg'
                                    alt='shape'
                                    width={21.64}
                                    height={21.66}
                                    className='absolute -right-6.5 bottom-0 z-1'
                                />
                                <div className=' relative aspect-700/444 w-full'>
                                    <Image
                                        className='shadow-solid-l dark:hidden'
                                        src='/images/hero/hero-light.svg'
                                        alt='Hero'
                                        fill
                                    />
                                    <Image
                                        className='hidden shadow-solid-l dark:block'
                                        src='/images/hero/hero-dark.svg'
                                        alt='Hero'
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
