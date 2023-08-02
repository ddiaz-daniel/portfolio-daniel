import React from 'react';
import Image from 'next/image';
import { type Milestone } from '~/types/types';
import parse from 'html-react-parser';
import ProductConfigurator from './productConfigurator';

const isYouTubeVideo = (url: string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
};

const TimelineMilestone: React.FC<Milestone> = (milestone) => {

    const [month, year] = new Date(milestone.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).split(' ');
    const parsedDescription = parse(milestone.description);

    return (
        <div className={`flex flex-row w-full ${milestone.side === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-2/5 px-2 py-10 self-center">
                <div className="flex flex-col w-full rounded-lg shadow bg-white px-4 py-5">
                    <div className="text-gray-600 mb-2 flex justify-between text-xl">
                        <div className="font-bold">{milestone.name}</div>
                    </div>
                    <div className="text-gray-600 text-lg">
                        {parsedDescription}
                    </div>
                </div>
            </div>

            <div className="w-1/5 flex justify-center">
                <div className={`relative flex h-full w-1 bg-[rgb(0,0,50)] items-center justify-center ${milestone.side === 'left' ? 'flex' : 'flex-reverse'}`}>
                    <div className="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-[rgb(0,0,50)] leading-none text-center text-lg z-10 bg-white font-thin">
                        <div>{month}</div>
                        <div>{year}</div>
                    </div>
                </div>
            </div>
            <div className="place-content-center w-2/5 ">
                <div className="px-2 py-10"> {isYouTubeVideo(milestone.image) ? (
                    <iframe
                        className="w-full h-[300px]"
                        src={`${milestone.image}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                ) : milestone.image === "productConfigurator" ?
                    <div className="w-full h-[300px] bg-transparent"></div> :
                    //<ProductConfigurator className="w-auto h-[300px] bg-transparent" /> :
                    <Image src={milestone.image} alt="Timeline" className="w-auto h-[300px] object-contain" height={300} width={300} />
                }
                </div>
            </div>
        </div>
    );
};

export default TimelineMilestone;
