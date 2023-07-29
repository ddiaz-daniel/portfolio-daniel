import React from "react";
import { getIcon } from "./technologyIcons";
import Link from "next/link";
const SocialMedia: React.FC = () => {
    const githubIcon = getIcon("github", 40);
    const linkedinIcon = getIcon("linkedin", 40);
    const emailIcon = getIcon("email", 40);

    return (
        <nav className="flex lg:justify-evenly justify-between mt-8">
            <Link
                href={`mailto:${process.env.EMAIL_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
            >
                {emailIcon}
            </Link>
            <Link
                href={`${process.env.LINKEDIN_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
                {linkedinIcon}
            </Link>
            <Link
                href={`${process.env.GITHUB_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 cursor-pointer transition-colors duration-300"
            >
                {githubIcon}
            </Link>
        </nav>
    );
};

export default SocialMedia;
