import React, { createContext, useContext, useState } from 'react';

interface ProjectFilterContextValue {
    activeFilter: string[];
    setActiveFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

const ProjectFilterContext = createContext<ProjectFilterContextValue | undefined>(
    undefined
);

export const useProjectFilterContext = (): ProjectFilterContextValue => {
    const context = useContext(ProjectFilterContext);
    if (!context) {
        throw new Error(
            'useProjectFilterContext must be used within a ProjectFilterProvider'
        );
    }
    return context;
};

interface ProjectFilterProviderProps {
    children: React.ReactNode;
}

export const ProjectFilterProvider: React.FC<ProjectFilterProviderProps> = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState<string[]>([]);

    return (
        <ProjectFilterContext.Provider value={{ activeFilter, setActiveFilter }}>
            {children}
        </ProjectFilterContext.Provider>
    );
};
