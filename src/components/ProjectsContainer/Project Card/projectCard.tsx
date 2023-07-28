import React from 'react';
import { type Project } from '~/types/types';
import Image from 'next/image';
import Stack from './cardStack';
import CollaboratorsTasks from './cardCollaboratorsTasks';
import CardLinks from './cardLinks';
interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="flex flex-row items-center justify-center w-full h-full pl-32">
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <h1 className="text-5xl font-bold leading-none place-self-start text-white md:text-[6rem] line">
                    {project.name}
                </h1>
                <h1 className="text-3xl font-bold leading-none md:place-self-start text-white md:text-[4rem] line">
                    {project.description}
                </h1>
                <div className="flex flex-row items-center justify-center w-full h-full">
                    {project.stack ? (
                        <Stack stack={project.stack} />) : null}
                </div>
                {project.collaborators && project.tasks ? (
                    <CollaboratorsTasks collaborators={project.collaborators} tasks={project.tasks} />) : null}

                <CardLinks github={project.github} website={project.website} />

            </div>
            <div className="flex flex-col items-center justify-center w-1/2 h-full">

                <Image className="lg:w-[450px] lg:h-[450px] md:w-[1000px] md:l-[800px] object-cover" src={project.preview} alt={project.name} width={1000} height={800} />
            </div>

        </div >
    );
};

export default ProjectCard;
