import react, { CSSProperties, Suspense } from 'react';
import ProjectFilter from './projectFilter';
import useGetProjects from './useGetProjects';
import ProjectHexagon from './projectHexagon';

interface ProjectContainerProps {
    className?: string;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ className }) => {

    const projects = useGetProjects();
    if (!projects) {
        return (
            <Suspense fallback={<div>Loading...</div>} />
        );
    }

    return (
        <div id="#projects" className={`flex justify-center w-full h-full ${className}`}>
            <div className='hex-container'>
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

export default ProjectContainer;;