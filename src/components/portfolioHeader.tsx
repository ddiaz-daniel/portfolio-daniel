import React, { useEffect, useState } from 'react';

interface PortfolioHeaderProps {
    className?: string;
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ className }) => {
    const welcomeMessage = "Welcome to my portfolio.";
    const [showWelcome, setShowWelcome] = useState(false);
    const [welcomeText, setWelcomeText] = useState('');
    const [blinking, setBlinking] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowWelcome(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (showWelcome) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                setWelcomeText(welcomeMessage.slice(0, currentIndex + 1));
                currentIndex++;
                if (currentIndex === welcomeMessage.length) {
                    clearInterval(interval);
                    setBlinking(true);
                }
            }, 100);
        }
    }, [showWelcome]);


    return (
        <div id="" className={`flex flex-col justify-center min-h-screen ${className}`}>
            <h1 className="text-5xl font-bold leading-none text-white md:text-[4rem] lg:text-[6rem] line">
                Hi, I am Daniel
            </h1>
            <h3 className='text-2xl font-bold leading-none text-purple-500 md:text-[1rem] lg:text-[2rem] line'>
                {showWelcome && welcomeText}
                <span className='animate-blink text-white'>{blinking && "|"}
                </span>
            </h3>
        </div>
    );
};

export default PortfolioHeader;
