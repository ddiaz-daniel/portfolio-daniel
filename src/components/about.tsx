import React from "react";
import Image from "next/image";

interface AboutProps {
    className?: string;
}

const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <div id="#about" className={`flex min-h-screen flex-col-reverse md:flex-row items-center justify-center ${className}`}>
            <div className="flex flex-col self-center w-8/12 md:w-3/4 md:pl-16 lg:pl-32">
                <h1 className="text-2xl font-bold leading-none place-self-start text-white md:text-[2.5rem] lg:text-[6rem] line pb-16">
                    About me
                </h1>
                <h1 className="text-xl font-normal md:place-self-start text-white md:text-[1.5rem] lg:text-[1.8rem] leading-9">
                    My name is Daniel Diaz I am a web developer and Masters student at the {' '}
                    <span className="text-purple-500">FH Oberösterreich</span>
                    {' '}in Hegenberg, Austria. With 4+ years of experience in the field, I have worked with a variety of technologies and frameworks.
                    I am currently focused on {' '}
                    <span className="text-purple-500">React</span> and <span className="text-purple-500">Next.js</span>.
                </h1>
                <h1 className="text-2xl font-normal leading-none md:place-self-start text-white md:text-[2.5rem] lg:text-[2rem] line pt-8">
                    And this has been part of my journey so far...
                </h1>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 md:1/4 m-8">

                <Image
                    className="lg:w-[450px] lg:h-[450px] md:w-[250px] md:l-[250px] object-cover rounded-full"
                    src="/images/photo.jpg"
                    alt="my picture"
                    width={500}
                    height={500}
                />
            </div>
        </div >
    );
};

export default About;