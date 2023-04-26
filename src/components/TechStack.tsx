import React from "react";
import myTechStack from "../data/myTechStack.json";

export default function TechStack() {
  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-8 text-3xl font-bold">My Tech Stack</h2>
      <p className="text-lg text-gray-500 dark:text-gray-300">
        I&apos;m always looking to expand my skills and stay up-to-date with the
        latest technologies. Here are some of the technologies and tools that
        I&apos;ve used to build projects.
      </p>

      <div className="mt-4">
        <div className="flex flex-wrap">
          {myTechStack.skills.map((skill) => (
            <span
              key={skill}
              className="mb-2 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition duration-300 ease-out hover:-translate-y-1 dark:bg-transparent dark:text-gray-300 dark:outline dark:outline-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
