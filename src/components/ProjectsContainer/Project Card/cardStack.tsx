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
                    <p key={index} className={`text-black will-change-auto ${language.color.replace("bg", "text")} pr-2`}>{`#${language.id}`}</p>
                    ;
            })}
        </div>
    );
};

export default Stack;
