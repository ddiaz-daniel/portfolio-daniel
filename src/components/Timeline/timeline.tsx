import React from 'react';
import useGetMilestones from './useGetMilestones';
import TimelineMilestone from './timelineMilestone';
import { type Milestone } from '~/types/types';

const Timeline: React.FC = () => {

    const milestones: Milestone[] = useGetMilestones()!;
    if (!milestones) {
        return null;
    }

    return (
        <div id="#timeline" className="bg-gray-200">
            <div className="w-4/5 mx-auto">
                <div className="flex flex-col w-full">
                    {milestones.map((milestone, index) => (
                        <TimelineMilestone key={index} {...milestone} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
