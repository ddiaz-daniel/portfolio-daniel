import React from "react";
import { FaQuestion } from "react-icons/fa";
import {
    SiOpencv, SiNextdotjs, SiJquery, SiTypescript, SiCsharp, SiGithub, SiWhatsapp,
    SiGmail, SiLinkedin, SiPython, SiJavascript, SiArduino, SiBootstrap, SiCplusplus,
    SiCss3, SiHtml5, SiPhp, SiReact, SiSass, SiTailwindcss, SiUnity, SiDotnet
} from "react-icons/si";

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
    other: ({ size }) => <FaQuestion size={size} />,
};

export const getIcon = (iconName: string, size = 50) => {
    const icon = technologyIcons[iconName.toLowerCase()];
    if (icon) {
        return React.createElement(icon, { size });
    }
    return null;
};
