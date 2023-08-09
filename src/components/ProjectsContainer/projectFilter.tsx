import React, { useEffect, useState } from 'react';
import { getIcon, languages } from '../technologyIcons';
import { useProjectFilterContext } from './projectFilterContext';

const categories = [
    'All',
    'Web Technologies',
    '3D',
    'None',
];

const languageCategories: Record<string, string[]> = {
    'Web Technologies': ['js', 'bootstrap', 'jquery', 'html', 'css', 'react', 'next', 'php', 'scss', 'tailwind'],
    '3D': ['babylonjs', 'opencv'],
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
        setActiveFilter(languages.map((language) => language.id));

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

    useEffect(() => {
        handleCategoryChange('All');
    }, []);

    const sortedLanguages = [...languages].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="w-full px-36 py-16 self-center">
            <div className="flex justify-left gap-4 mb-4">
                <h2 className="text-xl mb-2 text-white">Categories:</h2>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 text-lg rounded ${isCategoryActive(category) ? 'bg-purple-500 text-white' : 'bg-white text-black'
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
