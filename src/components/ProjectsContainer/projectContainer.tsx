import { Suspense } from 'react';
import ProjectFilter from './projectFilter';
import useGetProjects from './useGetProjects';
import { useProjectFilterContext } from './projectFilterContext';
import ProjectCard from './Project Card';

interface ProjectContainerProps {
    className?: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ className }) => {
    const { activeFilter } = useProjectFilterContext();
    const projects = useGetProjects(activeFilter);

    if (!projects) {
        return (
            <Suspense fallback={<div>Loading...</div>} />
        );
    }

    return (


        <div id="#projects" className={`flex flex-col justify-center w-full min-h-screen ${className}`}>
            <div>
                <h1 className="text-4xl font-bold leading-none place-self-start text-white md:text-[2.5rem] lg:text-[6rem] line pt-16 pl-36">Projects</h1>
            </div>
            <ProjectFilter />
            <div className='flex flex-wrap pl-12 md:px-8 place-content-center'>
                {projects.map((project, subIndex) => (
                    <ProjectCard key={subIndex} project={project} />
                ))}
            </div>
        </div>
    );

};

export default ProjectContainer;