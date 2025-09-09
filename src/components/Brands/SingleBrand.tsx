import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Brand {
    image: string;
    href: string;
    name: string;
    imageLight: string;
    id: number;
}

interface SingleBrandProps {
    brand: Brand;
}

const SingleBrand: React.FC<SingleBrandProps> = ({ brand }) => {
    const { image, href, name, imageLight, id } = brand;

    return (
        <>
            <motion.a
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
                transition={{ duration: 1, delay: id * 0.1 }}
                viewport={{ once: true }}
                href={href}
                className='animate_top relative block h-16 w-32 flex items-center justify-center'>
                <Image
                    className='opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden object-contain max-h-12 max-w-full'
                    src={image}
                    alt={name}
                    width={120}
                    height={48}
                />
                <Image
                    className='hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block object-contain max-h-12 max-w-full'
                    src={imageLight}
                    alt={name}
                    width={120}
                    height={48}
                />
            </motion.a>
        </>
    );
};

export default SingleBrand;
