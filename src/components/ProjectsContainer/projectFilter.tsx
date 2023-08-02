import React, { useState } from 'react';
import { getIcon } from '../technologyIcons';
import { useProjectFilterContext } from './projectFilterContext';

const languages = [
    { id: 'python', name: 'Python', color: 'bg-yellow-500' },
    { id: 'js', name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 'bootstrap', name: 'Bootstrap', color: 'bg-purple-500' },
    { id: 'jquery', name: 'jQuery', color: 'bg-blue-600' },
    //{ id: 'cpp', name: 'C++', color: 'bg-blue-400' },
    //{ id: 'unity', name: 'Unity', color: 'bg-black' },
    { id: 'csharp', name: 'C#', color: 'bg-green-600' },
    //{ id: 'arduino', name: 'Arduino', color: 'bg-teal-500' },
    { id: 'ts', name: 'TypeScript', color: 'bg-blue-700' },
    { id: 'html', name: 'HTML', color: 'bg-orange-600' },
    { id: 'css', name: 'CSS', color: 'bg-blue-600' },
    { id: 'react', name: 'React/ React Native', color: 'bg-blue-400' },
    { id: 'next', name: 'Next.js', color: 'bg-black' },
    { id: 'php', name: 'PHP', color: 'bg-purple-500' },
    { id: 'scss', name: 'SCSS', color: 'bg-pink-500' },
    { id: 'opencv', name: 'OpenCV', color: 'bg-red-500' },
    { id: 'tailwind', name: 'Tailwind', color: 'bg-cyan-500' },
    { id: 'dotnet', name: '.NET', color: 'bg-purple-500' },
    { id: 'vue', name: 'Vue', color: 'bg-green-500' },
    { id: 'babylonjs', name: 'Babylon.js', color: 'bg-orange-600' },

];

const categories = [
    'All',
    'Web Technologies',
    '3D',
    //'Arduino',
    'None',
];

const languageCategories: Record<string, string[]> = {
    'Web Technologies': ['js', 'bootstrap', 'jquery', 'html', 'css', 'react', 'next', 'php', 'scss', 'tailwind'],
    '3D': ['unity', 'babylonjs', 'three', 'opencv'],
    //'Arduino': ['arduino'],
    'None': [],
};

const ProjectFilter: React.FC = () => {
    const { activeFilter, setActiveFilter } = useProjectFilterContext();
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const handleLanguageClick = (language: string) => {
        setActiveFilter((prevLanguages) => {
            if (prevLanguages.includes(language)) {
                return prevLanguages.filter((lang) => lang !== language);
            } else {
                return [...prevLanguages, language];
            }
        });
    };

    const handleAllButtonClick = () => {
        if (activeCategory === 'All') {
            setActiveFilter(languages.map((language) => language.id));
            console.log(activeFilter);
        } else {
            setActiveFilter(languageCategories[activeCategory] ?? []);
        }
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        if (category === 'All') {
            setActiveFilter(languages.map((language) => language.id));
        } else {
            setActiveFilter(languageCategories[category] ?? []);
        }
    };

    const isAllActive = activeFilter.length === languages.length;

    const isCategoryActive = (category: string) => {
        if (category === 'All') {
            return activeFilter.length === languages.length;
        } else {
            const categoryLanguages = languageCategories[category];
            return categoryLanguages && categoryLanguages.every(lang => activeFilter.includes(lang));
        }
    };

    const sortedLanguages = [...languages].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="w-full px-36 py-16 self-center">
            <div className="flex justify-left gap-4 mb-4">
                <h2 className="text-xl mb-2 text-white">Categories:</h2>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 text-lg rounded ${isCategoryActive(category) ? 'bg-purple-600 text-white' : 'bg-white text-black'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <br />
            <div className="flex flex-wrap gap-4">
                <button
                    onClick={handleAllButtonClick}
                    className={`flex flex-row ${isAllActive ? 'bg-purple-500 text-white' : 'bg-white text-black'
                        } rounded p-2 items-center`}
                >
                    <span className="text-lg">All</span>
                </button>
                {sortedLanguages.map(({ name, id, color }) => (
                    <button
                        key={name}
                        onClick={() => handleLanguageClick(id)}
                        className={`flex flex-row content-stretch ${activeFilter.includes(id) ? `${color} text-white` : 'bg-white text-black'
                            } rounded p-2 items-center`}
                    >
                        {getIcon(id, 24)}
                        <span className="pl-2 text-lg">{name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectFilter;
