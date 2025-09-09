'use client';
import AboutMe from '@/components/About';
import Brands from '@/components/Brands';
import FunFact from '@/components/FunFact';
import Hero from '@/components/Hero';
// import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
// import Experience from '@/components/Experience';
import { Spotlight } from '@/components/ui/spotlight';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div>
            <section className='relative w-full overflow-hidden pt-20'>
                <Spotlight
                    gradientFirst='radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)'
                    gradientSecond='radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)'
                    gradientThird='radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)'
                />
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -20,
                        },

                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }}>
                    <Hero />
                </motion.div>

                {/* TODO: Update with accurate data before making public */}
                {/* <Skills />
                <Experience />
                <Projects /> */}
                <FunFact />
                <Brands />
                <AboutMe />

            </section>
        </div>
    );
}
