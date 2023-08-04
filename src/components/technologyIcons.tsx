import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
    SiOpencv, SiNextdotjs, SiJquery, SiTypescript, SiCsharp, SiGithub, SiWhatsapp,
    SiGmail, SiLinkedin, SiPython, SiJavascript, SiArduino, SiBootstrap, SiCplusplus,
    SiCss3, SiHtml5, SiPhp, SiReact, SiSass, SiTailwindcss, SiUnity, SiDotnet, SiVuedotjs, SiBitwig
} from "react-icons/si";
import Image from "next/image";

export const languages = [
    { id: 'python', name: 'Python', color: 'bg-yellow-500' },
    { id: 'js', name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 'bootstrap', name: 'Bootstrap', color: 'bg-gradient-to-r from-purple-400 to-purple-500' },
    { id: 'jquery', name: 'jQuery', color: 'bg-blue-600' },
    //{ id: 'cpp', name: 'C++', color: 'blue-400' },
    //{ id: 'unity', name: 'Unity', color: 'black' },
    { id: 'csharp', name: ' C# ', color: 'bg-green-600' },
    //{ id: 'arduino', name: 'Arduino', color: 'teal-500' },
    { id: 'ts', name: 'TypeScript', color: 'bg-blue-700' },
    { id: 'html', name: 'HTML', color: 'bg-orange-600' },
    { id: 'css', name: 'CSS', color: 'bg-blue-600' },
    { id: 'react', name: 'React', color: 'bg-blue-400' },
    { id: 'next', name: 'Next.js', color: 'bg-black' },
    { id: 'php', name: 'PHP', color: 'bg-purple-500' },
    { id: 'scss', name: 'SCSS', color: 'bg-pink-500' },
    { id: 'opencv', name: 'OpenCV', color: 'bg-black' },
    { id: 'tailwind', name: 'Tailwind', color: 'bg-cyan-500' },
    { id: 'dotnet', name: '.NET', color: 'bg-purple-500' },
    { id: 'vue', name: 'Vue', color: 'bg-green-500' },
    { id: 'babylonjs', name: 'Babylon.js', color: 'bg-orange-600' },
    { id: 'twig', name: 'Twig', color: 'bg-[rgb(186,207,41)]' },
    { id: 'vite', name: 'Vite', color: 'bg-gradient-to-r from-[rgb(65,209,255)] to-[rgb(189,52,254)]' },

];

export const technologyIcons: Record<string, React.FC<{ size: number; }>> = {
    github: ({ size }) => <SiGithub size={size} />,
    whatsapp: ({ size }) => <SiWhatsapp size={size} />,
    email: ({ size }) => <SiGmail size={size} />,
    linkedin: ({ size }) => <SiLinkedin size={size} />,
    python: ({ size }) => <PythonIcon size={size} />,
    js: ({ size }) => <SiJavascript size={size} />,
    bootstrap: ({ size }) => <SiBootstrap size={size} />,
    jquery: ({ size }) => <SiJquery size={size} />,
    cpp: ({ size }) => <SiCplusplus size={size} />,
    unity: ({ size }) => <SiUnity size={size} />,
    csharp: ({ size }) => <SiCsharp size={size} />,
    arduino: ({ size }) => <SiArduino size={size} />,
    ts: ({ size }) => <SiTypescript size={size} />,
    html: ({ size }) => <SiHtml5 size={size} />,
    css: ({ size }) => <SiCss3 size={size} />,
    react: ({ size }) => <SiReact size={size} />,
    next: ({ size }) => <SiNextdotjs size={size} />,
    php: ({ size }) => <SiPhp size={size} />,
    scss: ({ size }) => <SiSass size={size} />,
    opencv: ({ size }) => <OpenCVIcon size={size} />,
    tailwind: ({ size }) => <SiTailwindcss size={size} />,
    dotnet: ({ size }) => <SiDotnet size={size} />,
    vue: ({ size }) => <SiVuedotjs size={size} />,
    babylonjs: ({ size }) => <BabylonIcon size={size} />,
    twig: ({ size }) => <TwigIcon size={size} />,
    vite: ({ size }) => <ViteIcon size={size} />,
    other: ({ size }) => <FaQuestion size={size} />,
};

const BabylonIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/icons/babylon-icon.png"
        alt="BabylonJS"
        className={``}
        width={size}
        height={size}
        layout="fixed"
    />
);

const TwigIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/icons/twig-icon.png"
        alt="Twig"
        className={``}
        width={size}
        height={size}
        layout="fixed"
    />
);

const ViteIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/icons/vite-icon.svg"
        alt="Vite"
        className={``}
        width={size}
        height={size}
        layout="fixed"
    />
);

const OpenCVIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/icons/opencv-icon.png"
        alt="OpenCV"
        className={``}
        width={size}
        height={size}
        layout="fixed"
    />
);

const PythonIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/icons/python-icon.png"
        alt="Python"
        className={``}
        width={size}
        height={size}
        layout="fixed"
    />
);

export const getIcon = (iconName: string, size = 50) => {
    const icon = technologyIcons[iconName.toLowerCase()];
    if (icon) {
        return React.createElement(icon, { size });
    }
    return null;
};
