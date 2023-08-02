import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
    SiOpencv, SiNextdotjs, SiJquery, SiTypescript, SiCsharp, SiGithub, SiWhatsapp,
    SiGmail, SiLinkedin, SiPython, SiJavascript, SiArduino, SiBootstrap, SiCplusplus,
    SiCss3, SiHtml5, SiPhp, SiReact, SiSass, SiTailwindcss, SiUnity, SiDotnet, SiVuedotjs
} from "react-icons/si";
import Image from "next/image";

export const technologyIcons: Record<string, React.FC<{ size: number; }>> = {
    github: ({ size }) => <SiGithub size={size} />,
    whatsapp: ({ size }) => <SiWhatsapp size={size} />,
    email: ({ size }) => <SiGmail size={size} />,
    linkedin: ({ size }) => <SiLinkedin size={size} />,
    python: ({ size }) => <SiPython size={size} />,
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
    opencv: ({ size }) => <SiOpencv size={size} />,
    tailwind: ({ size }) => <SiTailwindcss size={size} />,
    dotnet: ({ size }) => <SiDotnet size={size} />,
    vue: ({ size }) => <SiVuedotjs size={size} />,
    babylonjs: ({ size }) => <BabylonIcon size={size} />,
    other: ({ size }) => <FaQuestion size={size} />,
};
//import babylon image to use as icon

const BabylonIcon = ({ size = 24 }: { size: number; }) => (
    <Image
        src="/babylon-icon.png"
        alt="BabylonJS"
        className={`w-[${size}px] h-[${size}px]`}
        width={40}
        height={40}
    />
);

export const getIcon = (iconName: string, size = 50) => {
    const icon = technologyIcons[iconName.toLowerCase()];
    if (icon) {
        return React.createElement(icon, { size });
    }
    return null;
};
