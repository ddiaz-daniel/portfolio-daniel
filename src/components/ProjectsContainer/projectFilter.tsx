import React from 'react';

const ProjectFilter: React.FC = () => {
    return (
        <div className="flex justify-center items-center bg-gray-200 py-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Filter 1</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Filter 2</button>
        </div>
    );
}

export default ProjectFilter;
