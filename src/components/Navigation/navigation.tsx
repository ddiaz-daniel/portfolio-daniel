import React from 'react';
import Link from 'next/link';
import SocialMedia from '../socialMedia';
import { BsClockHistory, BsCodeSlash, BsFileEarmarkPdf, BsFillHouseDoorFill, BsFillPersonFill } from 'react-icons/bs';

const Navigation = () => {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };
    const fullHref = typeof window !== 'undefined' ? `${window.location.origin}` : "";
    return (
        <>
            <nav
                className={`fixed w-16 left-0 top-0 h-full opacity-80 bg-gray-800 text-white p-4 text-2xl
                flex flex-col justify-center z-10`}
            >

                <div className="flex flex-col place-content-center space-y-4">
                    <Link className="flex flex-row w-fit group" href={`${fullHref}`} onClick={() => scrollToSection('#home')} passHref>
                        <BsFillHouseDoorFill size={30} className="hover:text-purple-500" />
                        <span className="opacity-0 group-hover:opacity-100 transform pl-6 transition-opacity duration-300 bg-gray-800 pr-4 py-1 rounded-md">
                            Home
                        </span>
                    </Link>
                    <Link className="flex flex-row w-fit group" href={`${fullHref}#about`} onClick={() => scrollToSection('#about')} passHref>
                        <BsFillPersonFill size={30} className="hover:text-purple-500" />
                        <span className="opacity-0 group-hover:opacity-100 transform pl-6 transition-opacity duration-300 bg-gray-800 pr-4 py-1 rounded-md">
                            About
                        </span>
                    </Link>
                    <Link className="flex flex-row w-fit group" href={`${fullHref}#timeline`} onClick={() => scrollToSection('#timeline')}>
                        <BsClockHistory size={30} className="hover:text-purple-500" />
                        <span className="opacity-0 group-hover:opacity-100 transform pl-6 transition-opacity duration-300 bg-gray-800 pr-4 py-1 rounded-md">
                            Timeline
                        </span>
                    </Link>
                    <Link className="flex flex-row w-fit group" href={`${fullHref}#projects`} onClick={() => scrollToSection('#projects')}>
                        <BsCodeSlash size={30} className="hover:text-purple-500" />
                        <span className="opacity-0 group-hover:opacity-100 transform pl-6 transition-opacity duration-300 bg-gray-800 pr-4 py-1 rounded-md">
                            Projects
                        </span>
                    </Link>
                    <Link className="flex flex-row w-fit group items-center" href="/documents/CV_DIAZ_2025.pdf" target='_blank'>
                        <BsFileEarmarkPdf size={30} className="hover:text-purple-500" />
                        <span className="opacity-0 group-hover:opacity-100 transform pl-6 transition-opacity duration-300 bg-gray-800 pr-4 py-1 rounded-md">
                            Resume
                        </span>
                    </Link>
                </div>

                <div className="absolute bottom-4 py-8">
                    <SocialMedia className='flex-col space-y-4' size={30} />
                </div>
            </nav>
        </>
    );
};

export default Navigation;
