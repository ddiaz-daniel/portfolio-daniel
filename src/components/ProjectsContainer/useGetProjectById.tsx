import { useEffect, useState } from "react";
import { type ProjectsResponse, type Project } from "~/types/types";

function useGetProjectById(id: string | null) {
  const [projectResponse, setProjectResponse] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = id ? `/api/projects?id=${id}` : '/api/projects';
        const response = await fetch(url, {
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
        if (id && fetchedData?.projects) {
          setProjectResponse(fetchedData?.projects[0] ?? null);
        } else {
          setProjectResponse(null);
        }
      } catch (error) {
        console.error(error);
        setProjectResponse(null);
      }
    };

    void fetchData();
  }, [id]);

  return projectResponse;
}

export default useGetProjectById;
