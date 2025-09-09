'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ThemeToggler from './ThemeToggler';
import menuData, { Menu } from './menuData';

const Header = () => {
    const [navigationOpen, setNavigationOpen] = useState(false);
    const [dropdownToggler, setDropdownToggler] = useState(false);
    const [stickyMenu, setStickyMenu] = useState(false);

    const pathUrl = usePathname();

    // Sticky menu
    const handleStickyMenu = () => {
        if (window.scrollY >= 80) {
            setStickyMenu(true);
        } else {
            setStickyMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleStickyMenu);
    });

    return (
        <header
            className={`fixed left-0 top-0 z-99999 w-full py-7 ${
                stickyMenu
                    ? 'bg-white py-4! shadow-sm transition duration-100 dark:bg-black'
                    : ''
            }`}>
            <div className='relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0'>
                <div className='flex w-full items-center justify-between xl:w-1/4'>
                    <a
                        href='#'
                        className='w-full aspect-[119/30] relative max-w-[120px] sm:max-w-[160px] md:max-w-[200px] xl:max-w-[250px]'>
                        <Image
                            src='/images/durazo-light.png'
                            alt='logo'
                            fill
                            className='object-contain hidden dark:block'
                        />
                        <Image
                            src='/images/durazo-dark-logo.png'
                            alt='logo'
                            fill
                            className='object-contain dark:hidden'
                        />
                    </a>

                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-label='hamburger Toggler'
                        className='block xl:hidden'
                        onClick={() => setNavigationOpen(!navigationOpen)}>
                        <span className='relative block h-5.5 w-5.5 cursor-pointer'>
                            <span className='absolute right-0 block h-full w-full'>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-0 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? 'w-full! delay-300'
                                            : 'w-0'
                                    }`}></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? 'delay-400 w-full!'
                                            : 'w-0'
                                    }`}></span>
                                <span
                                    className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? 'w-full! delay-500'
                                            : 'w-0'
                                    }`}></span>
                            </span>
                            <span className='du-block absolute right-0 h-full w-full rotate-45'>
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? 'h-0! delay-0'
                                            : 'h-full'
                                    }`}></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                        !navigationOpen
                                            ? 'h-0! delay-200'
                                            : 'h-0.5'
                                    }`}></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}
                </div>

                {/* Nav Menu Start   */}
                <div
                    className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
                        navigationOpen &&
                        'navbar visible! mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent'
                    }`}>
                    <nav>
                        <ul className='flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10'>
                            {menuData.map(
                                (menuItem: Menu, key: number | string) => (
                                    <li
                                        key={key}
                                        className={
                                            menuItem.submenu && 'group relative'
                                        }>
                                        {menuItem.submenu ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setDropdownToggler(
                                                            !dropdownToggler
                                                        )
                                                    }
                                                    className='flex cursor-pointer items-center justify-between gap-3 hover:text-primary'>
                                                    {menuItem.title}
                                                    <span>
                                                        <svg
                                                            className='h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 512 512'>
                                                            <path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
                                                        </svg>
                                                    </span>
                                                </button>

                                                <ul
                                                    className={`dropdown ${
                                                        dropdownToggler
                                                            ? 'flex'
                                                            : ''
                                                    }`}>
                                                    {menuItem.submenu.map(
                                                        (
                                                            item: Menu,
                                                            key: number | string
                                                        ) => (
                                                            <li
                                                                key={key}
                                                                className='hover:text-primary'>
                                                                <Link
                                                                    href={
                                                                        item.path ||
                                                                        '#'
                                                                    }>
                                                                    {item.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                href={`${menuItem.path}`}
                                                className={
                                                    pathUrl === menuItem.path
                                                        ? 'text-primary hover:text-primary'
                                                        : 'hover:text-primary'
                                                }>
                                                {menuItem.title}
                                            </Link>
                                        )}
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>

                    <div className='mt-7 flex items-center gap-6 xl:mt-0'>
                        <ThemeToggler />

                        <ul className='flex items-center gap-5'>
                            <li>
                                <a
                                    href='https://www.linkedin.com/in/rdurazo/'
                                    aria-label='social icon'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    <svg
                                        className='fill-[#D1D8E0] transition-all duration-300 hover:fill-primary'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <g clipPath='url(#clip0_48_1505)'>
                                            <path
                                                d='M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z'
                                                fill=''
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id='clip0_48_1505'>
                                                <rect
                                                    width='24'
                                                    height='24'
                                                    fill='white'
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

// w-full delay-300

export default Header;
