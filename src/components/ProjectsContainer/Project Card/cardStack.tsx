import React from "react";
import { getIcon } from "~/components/technologyIcons";


interface StackProps {
    stack: string[];
}


const Stack: React.FC<StackProps> = ({ stack }) => {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {stack.map((tech, index) => (
                <div key={index} className="m-4 p-4 bg-gray-900 rounded-lg text-white max-w-xs" title={tech}>
                    {getIcon(tech.toLowerCase()) ?? getIcon("other")}
                </div>
            ))}
        </div>
    );
};

export default Stack;
