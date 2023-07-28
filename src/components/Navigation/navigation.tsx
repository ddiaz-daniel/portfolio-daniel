import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CgClose, CgMenu } from 'react-icons/cg';
import SocialMedia from '../socialMedia';
import Image from 'next/image';

const Navigation = () => {
    const [showNav, setShowNav] = useState(true);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const setNavClasses = () => {
        if (showNav) {
            return "translate-x-0";
        } else {
            return "-translate-x-full";
        }
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    useEffect(() => {
        const handleScroll = () => {
            const isAtTop = window.scrollY <= window.innerHeight * 0.4;
            setShowNav(isAtTop);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navClasses = setNavClasses();

    return (
        <>
            <button
                className={`fixed top-4 z-10 bg-gray-800 p-2 rounded-md text-white hover:text-hsl(280,100%,70%) transition-all duration-300 ${showNav ? ' translate-x-64' : 'translate-x-4'}`}
                onClick={toggleNav}
            >
                {showNav ?
                    <CgClose size={25} /> :
                    <CgMenu size={25} />
                }
            </button>

            <nav
                className={`fixed w-80 left-0 top-0 h-screen opacity-80 bg-gray-800 text-white p-4 text-2xl
                flex flex-col justify-center ${navClasses} transition-transform duration-300 `}
            >
                <Link className="w-fit" href="" onClick={() => scrollToSection('')}>
                    <Image src="/images/danielLogo.png" alt="logo" width={200} height={200} />
                </Link>
                <div className="pl-10 flex flex-col h-[80vh] place-content-center">
                    <Link className="w-fit" href="#about" onClick={() => scrollToSection('#about')}>
                        <span className="hover:text-[hsl(280,100%,70%)] transition-colors duration-300">About</span>
                    </Link>
                    <Link className="w-fit" href="#timeline" onClick={() => scrollToSection('#timeline')}>
                        <span className="hover:text-[hsl(280,100%,70%)] transition-colors duration-300">Timeline</span>
                    </Link>
                    <Link className="w-fit" href="#projects" onClick={() => scrollToSection('#projects')}>
                        <span className="hover:text-[hsl(280,100%,70%)] transition-colors duration-300">Projects</span>
                    </Link>
                    <Link className="w-fit" href="#resume" onClick={() => scrollToSection('#resume')}>
                        <span className="hover:text-[hsl(280,100%,70%)] transition-colors duration-300">Resume</span>
                    </Link>
                </div>
                <div className="flex flex-col">
                    <SocialMedia />
                </div>
            </nav>
        </>
    );
};

export default Navigation;
