import React from 'react';
import { type Project } from '~/types/types';
import Image from 'next/image';

interface ProjectHexagonProps {
    project: Project;
    className?: string;
}

const ProjectHexagon: React.FC<ProjectHexagonProps> = ({ project, className }) => {
    return (
        <div className={`${className} group relative`}>
            <Image
                alt="Project Image"
                className="object-cover w-[800px] h-[800px] transition-opacity duration-300 group-hover:opacity-20"
                src={project.preview}
                width={800}
                height={800}
            />
            <div className="hexagon-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white">{project.name}</h3>
                <p className="text-white">{project.stack}</p>
            </div>
        </div>
    );
};

export default ProjectHexagon;
