import React from "react";
import { Project } from "~/types/project";
import Image from "next/image";

type Props = {
  project: Project;
  customImage?: React.ReactNode;
};

export default function ProjectCard({ project, customImage }: Props) {
  return (
    <>
      <li
        key={project.name}
        className="m-4 divide-y divide-gray-200 rounded-lg bg-white shadow dark:bg-zinc-900 sm:max-w-lg lg:max-w-2xl xl:max-w-md"
      >
        {customImage
          ? customImage
          : project.image && (
              <div className="group relative">
                <Image
                  className="transform rounded-t-lg object-cover shadow-md transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-50 dark:brightness-75"
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={600}
                />
                {project.demoLink && project.githubLink && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <div className="flex flex-row items-center justify-center space-x-2">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 ease-in-out hover:bg-indigo-700 group-hover:-translate-y-1"
                      >
                        Live Demo
                      </a>
                      <div className="h-12 w-0.5 transform rounded-lg bg-gray-500 transition-all duration-300 ease-in-out group-hover:-translate-y-1"></div>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 ease-in-out hover:bg-indigo-700 group-hover:-translate-y-1"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
        <div
          style={{
            boxShadow:
              "inset 35px 35px 71px #3c2040 inset -35px -35px 71px #4a284e",
          }}
        ></div>
        <div className="flex-1 p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-200">
            {project.name}
          </h3>
          {project.description && (
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              {project.description.map((paragraph) => {
                return (
                  <p key={paragraph} className="mb-2">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          )}
          {project.tags && (
            <div className="mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="me-2 mr-2 rounded border border-purple-400 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.techstack && (
            <div className="mt-4">
              {project.techstack.map((tag) => (
                <span
                  key={tag}
                  className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition duration-300 ease-out hover:-translate-y-1 dark:bg-transparent dark:text-gray-300 dark:outline dark:outline-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.demoLink && project.githubLink && (
            <div className="mt-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Live Demo
              </a>
              <span className="mx-2 text-gray-500">|</span>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500"
              >
                Source Code
              </a>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
