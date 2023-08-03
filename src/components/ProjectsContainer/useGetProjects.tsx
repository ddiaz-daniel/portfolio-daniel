import { useEffect, useState } from "react";
import { type Project, type ProjectsResponse } from "~/types/types";

function useGetProjects(activeFilter?: string[]) {
    const [projectsResponse, setProjectsResponse] = useState<Project[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/projects`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(activeFilter),
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
    }, [activeFilter]);

    return projectsResponse;
}

export default useGetProjects;
