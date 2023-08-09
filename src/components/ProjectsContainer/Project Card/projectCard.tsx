import React from 'react';
import { type Project } from '~/types/types';
import Image from 'next/image';
import Stack from './cardStack';
import Link from 'next/link';
import { getIcon } from '~/components/technologyIcons';
import { TfiWorld } from 'react-icons/tfi';

interface ProjectCardProps {
    project: Project;
    className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
    const fullHref = typeof window !== 'undefined' ? `${window.location.origin}` : "";

    return (
        <div
            className={`${className} group flex h-[32rem] w-96 m-2 md:m-4 rounded-md cursor-default
            bg-gradient-to-b from-cyan-400 from-30% via-purple-500 to-purple-500 p-1
             hover:from-cyan-400 hover:from-80% hover:to-cyan-600 transition-all duration-300 hover:scale-[1.01]
            shadow-lg shadow-purple-800/80 hover:shadow-cyan-700/80`}
        >
            <div className="flex flex-wrap w-full back bg-gray-200 rounded-md ">
                <div className="flex flex-col items-center justify-center w-full h-1/2">
                    <Image className="object-cover rounded-md h-full w-full" src={project.preview} alt={project.name} width={1680} height={1050} />
                </div>
                <div className="flex flex-col py-2 px-4 w-full h-auto">
                    <p className="text-lg font-bold justify-start align-top py-2 text-black line">{project.name}</p>
                    <p className="text-base line-clamp-3 text-black line ">{project.description}</p>
                </div>
                <Stack stack={project.stack} />
                <div className="flex flex-row items-center justify-evenly w-full h-auto py-2">
                    <Link href={`${fullHref}/projects/${project.id}`}
                        className="py-2 px-4 rounded-md bg-black text-white text-lg font-normal
                    hover:bg-purple-500">More</Link>
                    {project.website &&
                        <Link href={project.website} target="_blank" rel="noopener noreferrer" className='hover:text-purple-500'>
                            <div className="flex flex-col justify-center items-center">
                                <TfiWorld size={40} />
                                <span className="text-center">Website</span>
                            </div>
                        </Link>}
                    {project.github &&
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className='hover:text-purple-500'>
                            <div className="flex flex-col justify-center items-center">
                                {getIcon("github", 40)}
                                <span className="text-center">Github</span>
                            </div></Link>}
                </div>
            </div>
        </div >
    );
};

export default ProjectCard;
