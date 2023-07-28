import { useEffect, useState } from "react";
import { type Project, type ProjectsResponse } from "~/types/types";

function useGetProjects() {
    const [projectsResponse, setProjectsResponse] = useState<Project[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/projects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    console.error(response);
                    throw new Error('API request failed');
                }

                const fetchedData = await response.json() as ProjectsResponse;
                setProjectsResponse(fetchedData.projects);
            } catch (error) {
                console.error(error);
                setProjectsResponse(null);
            }
        };

        void fetchData();
    }, []);

    return projectsResponse;
}

export default useGetProjects;
