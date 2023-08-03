import { Suspense } from 'react';
import ProjectFilter from './projectFilter';
import useGetProjects from './useGetProjects';
import ProjectHexagon from './projectHexagon';
import { useProjectFilterContext } from './projectFilterContext';

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
                <h1 className="text-2xl font-bold leading-none place-self-start text-white md:text-[2.5rem] lg:text-[6rem] line pt-16 pl-36">Projects</h1>
            </div>
            <ProjectFilter />
            <div className='hex-container px-36'>
                {projects.map((project, index) => {
                    if (index % 5 === 0) {
                        const sublist = projects.slice(index, index + 5);
                        return (
                            <div key={index} className="hex-row">
                                {sublist.map((subProject, subIndex) => (
                                    <ProjectHexagon key={subIndex} project={subProject} className="hex" />
                                ))}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );

};

export default ProjectContainer;