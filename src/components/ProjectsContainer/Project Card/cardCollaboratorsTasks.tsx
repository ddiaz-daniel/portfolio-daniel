import React from "react";
import { type Task, type Collaborator } from "~/types/types";
import { FaGithub } from "react-icons/fa";

interface CollaboratorsTasksProps {
    collaborators: Collaborator[];
    tasks: Task[];
}

const CollaboratorsTasks: React.FC<CollaboratorsTasksProps> = ({ collaborators, tasks }) => {
    return (
        <div className="flex flex-col justify-start ">
            <ul className="list-disc">
                {tasks.map((task, index) => (
                    <li key={index} className="text-white">{task.description}</li>
                ))}
            </ul>
            <div className="flex flex-row items-center justify-evenly">
                {collaborators.map((collaborator) => (
                    <div key={collaborator.id} className="m-4 p-4 bg-gray-900 rounded-lg text-white max-w-xs">
                        <div className="flex items-center justify-center mb-4">
                            <h1 className="text-2xl font-bold">{collaborator.name}</h1>
                        </div>
                        <div className="flex items-center justify-center mb-4">
                            <a
                                href={`https://github.com/${collaborator.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollaboratorsTasks;
