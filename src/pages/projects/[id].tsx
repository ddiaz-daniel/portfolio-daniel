import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '~/components/Navigation';
import useGetProjectById from '~/components/ProjectsContainer/useGetProjectById';
import BackgroundParticles from '~/components/sceneComponent';
import Image from 'next/image';
import { getIcon } from '~/components/technologyIcons';
import { languages } from '~/components/ProjectsContainer/projectFilter';
import { FaGlobe } from 'react-icons/fa';

const ProjectDescription = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const project = useGetProjectById(id);
    const [showTitle, setShowTitle] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('');
        setShowTitle(false);
        setTimeout(() => {
            setShowTitle(true);
        }, 1500);
    }, []);

    useEffect(() => {
        if (showTitle && project) {
            let currentIndex = 0;
            const interval = setInterval(() => {
                setTitle(project.name.slice(0, currentIndex + 1));
                currentIndex++;
                if (currentIndex === title.length) {
                    clearInterval(interval);
                }
            }, 100);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showTitle]);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <div className="text-4xl font-bold text-center text-white">
                    Loading...
                </div>
            </div>
        );
    }

    const year = new Date(project.created_on).getFullYear();

    return (
        <>
            <Head>
                <title>{`Portfolio - ${project.name}`}</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen">
                <Navigation />
                <div className="flex flex-col items-center justify-center w-full snap-mandatory snap-y overflow-hidden">
                    {true ? (
                        <BackgroundParticles className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />
                    ) : (
                        <div className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />
                    )}
                    <div className="flex flex-col md:flex-row w-screen min-h-screen">
                        <div className="flex flex-col place-content-center w-screen md:w-1/2 h-full p-16 lg:pl-32 lg:fixed">
                            <div className="relative w-full">
                                <Image
                                    alt="Laptop Frame"
                                    className="object-contain w-full h-full"
                                    src={"/images/laptop.png"}
                                    width={1500}
                                    height={1500}
                                />
                                <div className="flex absolute top-[7%] left-[13%] object-cover w-[72.5%] h-[79%]">
                                    <Image
                                        alt="Project Image"
                                        className=" "
                                        src={project.preview}
                                        width={1728}
                                        height={1117}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row space-x-4 w-full items-center justify-around mt-8">
                                {project.github && (

                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="flex flex-row text-black bg-white py-4 px-8 rounded-md">
                                        {getIcon("github", 30)}
                                        <span className='pl-4 text-xl text-bold'>Github</span>
                                    </a>
                                )}
                                {project.website && (

                                    <a href={project.website} target="_blank" rel="noopener noreferrer"
                                        className="flex flex-row text-black bg-white py-4 px-8 rounded-md">
                                        <FaGlobe size={30} />
                                        <span className='pl-4 text-xl text-bold'>Website</span></a>
                                )}

                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full px-8 md:px-8 lg:px-32 ml-auto">
                            <h1 className="text-5xl font-bold text-purple-500 pt-16 pb-2">
                                {showTitle && title || "_"}
                            </h1>
                            {/*Project year*/}
                            <h1 className="text-sm font-bold text-white pb-8">
                                {year}
                            </h1>
                            {/*Project description*/}
                            <p className="mt-4 text-justify text-white">
                                {project.description}
                            </p>
                            {/*Collaborators name and role*/}
                            {project.collaborators && project.collaborators.length > 0 && (
                                <div className="flex flex-col mt-8 space-x-4 self-start">
                                    <h1 className="text-2xl font-bold text-white pb-8">
                                        Contributors
                                    </h1>
                                    <div className="flex flex-row w-full justify-evenly space-x-4">
                                        {project.collaborators.map((collaborator) => (
                                            <div key={collaborator.name} className="flex flex-col p-2 text-xs bg-white rounded-md place-items-center">
                                                <span className="text-lg text-black">{collaborator.name}</span>
                                                <span className="text-xs text-purple-500">{collaborator.role}</span>
                                                {collaborator.github && (
                                                    <div className='flex flex-row justify-center items-center pt-2 px-2 text-slate-600'>
                                                        {getIcon("github", 30)}
                                                        <a href={collaborator.github} target="_blank" rel="noopener noreferrer" className="text-xs pl-2">{collaborator.github.split('/').pop()}</a>
                                                    </div>
                                                )
                                                }
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            )}
                            {/*Project stack*/}
                            <div className="flex flex-col mt-8 space-x-4 self-start">
                                <h1 className="text-2xl font-bold text-white pb-8">
                                    Stack
                                </h1>
                                <div className="flex flex-wrap justify-start">
                                    {project.stack.map((stackItem) => {

                                        const { name, color } = languages.find((language) => language.id === stackItem) ?? { name: stackItem, color: "black" };
                                        return (
                                            <div
                                                key={stackItem}
                                                className={`flex flex-col m-2 p-2 text-xs text-white ${color} rounded-md place-items-center`}
                                            >
                                                {getIcon(stackItem, 30)}
                                                <span className="pl-2 text-lg text-white">{name}</span>
                                            </div>);
                                    })}
                                </div>
                            </div>
                            {/*Project tags*/}
                            <div className="flex flex-col mt-8 space-x-4 self-start mb-32">
                                <h1 className="text-2xl font-bold text-white pb-8">
                                    Tags
                                </h1>
                                <div className="flex flex-row space-x-4">
                                    {project.tags.map((tag) => (
                                        <div
                                            key={tag}
                                            className="flex flex-col p-2 text-xs bg-white text-black rounded-md place-items-center place-content-center"
                                        >
                                            <span className="text-lg text-black">{tag}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDescription;
