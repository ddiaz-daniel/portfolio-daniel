import { useEffect, useState } from "react";
import { type Milestone, type MilestonesResponse } from "~/types/types";

function useGetMilestones() {
    const [milestonesResponse, setMilestonesResponse] = useState<Milestone[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/milestones', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const fetchedData = await response.json() as MilestonesResponse;
                setMilestonesResponse(fetchedData.milestones);
            } catch (error) {
                console.error(error);
                setMilestonesResponse(null);
            }
        };

        void fetchData();
    }, []);

    return milestonesResponse;
}

export default useGetMilestones;
