import React from 'react';
import { type Project } from '~/types/types';
import Image from 'next/image';
import Link from 'next/link';


interface ProjectHexagonProps {
    project: Project;
    className?: string;
}

const ProjectHexagon: React.FC<ProjectHexagonProps> = ({ project, className }) => {
    const year = new Date(project.created_on).getFullYear();

    const fullHref = typeof window !== 'undefined' ? `${window.location.origin}` : "";

    return (
        <Link className={`${className} group relative`} href={`${fullHref}/projects/${project.id}`}>
            <div className='flex flex-col w-full h-full transition-opacity duration-300 group-hover:opacity-20'>
                <Image
                    alt="Project Image"
                    className="object-cover w-full h-full "
                    src={project.preview}
                    width={800}
                    height={800}
                />
                <div className="absolute bottom-4 w-full bg-gray-700 text-center"><h1 className='text-white self-center px-20 py-2'>{project.name}</h1></div>

            </div>
            <div className="absolute bg-[rgb(21,21,145)] top-0 flex flex-col hexagon-overlay text-center place-content-center items-center w-full h-full opacity-0 hover:opacity-70 transition-opacity duration-300">
                <h3 className="text-white text-lg font-bold md:text-base md:w-10/12">{project.name}</h3>
                <div className="flex flex-row flex-wrap w-3/4 place-content-center">
                    {project.stack ?
                        project.stack.map((stack, index) => (
                            <p key={index} className="text-white pr-2 invisible sm:visible">{stack}</p>
                        )) : null}
                </div>
                <p className="text-white text-sm">{year}</p>
            </div>
        </Link>
    );
};

export default ProjectHexagon;
