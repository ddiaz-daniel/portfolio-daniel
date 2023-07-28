import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { Project } from "~/types/types";

interface LinksProps {
    github: string | null;
    website: string;
}

const CardLinks: React.FC<LinksProps> = ({ github, website }) => {
    return (
        <div className="flex flex-row items-center w-full h-full justify-evenly">
            {github ? (
                <a href={github} target="_blank" rel="noreferrer">
                    <button className="bg-[hsl(280,100%,70%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded-full flex flex-row items-center">
                        <FaGithub size={50} />
                        <span className='px-4'>Github</span>
                    </button>
                </a>) : null}
            <a href={website} target="_blank" rel="noreferrer">
                <button className="bg-[hsl(280,100%,70%)] hover:bg-[hsl(280,100%,60%)] text-white font-bold py-2 px-4 rounded-full flex flex-row items-center">
                    <FaGlobe size={50} />
                    <span className='px-4'>Website</span>
                </button>
            </a>
        </div>
    );
}

export default CardLinks;