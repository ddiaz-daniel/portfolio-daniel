import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from '~/components/Navigation';
import useGetProjectById from '~/components/ProjectsContainer/useGetProjectById';
import BackgroundParticles from '~/components/sceneComponent';
import Image from 'next/image';

// Import the laptop frame image
import laptopFrameImage from '/path/to/laptop-frame-image.png';

const Subpage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const project = useGetProjectById(id);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center w-full min-h-screen">
                <div className="text-4xl font-bold text-center text-white">
                    Loading...
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex min-h-screen">
                <Navigation />
                <div className="flex flex-col items-center justify-center w-full snap-mandatory snap-y">
                    {false ? (
                        <BackgroundParticles className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />
                    ) : (
                        <div className="z-[-10] fixed top-0 left-0 w-full h-full bg-[rgb(0,0,50)]" />
                    )}
                    <div className="flex flex-row w-full min-h-screen">
                        <div className="flex flex-col place-content-center w-1/2 h-full px-8">
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
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2 h-full px-8">
                            <h1 className="text-5xl font-bold text-white">
                                {project.name}
                            </h1>
                            <p className="mt-4 text-justify text-white">
                                {project.description}
                            </p>
                            <div className="flex flex-row mt-4 space-x-4">
                                {project.stack.map((stackItem) => (
                                    <span
                                        key={stackItem}
                                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full"
                                    >
                                        {stackItem}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Subpage;
