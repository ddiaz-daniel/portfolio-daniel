import React from "react";
import { languages } from "~/components/technologyIcons";


interface StackProps {
    stack: string[];
}

const Stack: React.FC<StackProps> = ({ stack }) => {
    return (
        <div className="flex flex-wrap px-4 w-full leading-none">

            {stack.map((tech, index) => {
                const language = languages.find((language) => language.id == tech);
                return language &&
                    <p key={index} className={` will-change-auto ${language.color.replace("bg", "text")} pr-2`}>{`#${language.id}`}</p>
                    ;
            })}
            <p className="text-yellow-500 text-blue-600 text-green-500 text-green-600 text-blue-700 text-orange-600 text-blue-400 text-purple-500 text-purple-400 text-[rgb(189,52,254)] text-cyan-500 text-[rgb(186,207,41)] text-pink-500"> </p>
        </div>
    );
};

export default Stack;
