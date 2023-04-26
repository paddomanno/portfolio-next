import React from "react";
import myProjects from "../data/myProjects.json";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
      <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold">My Projects</h2>
        <p className="mb-8 text-lg text-gray-500">
          As a self-taught web developer, I enjoy creating small projects to
          learn new technologies and improve my skills. Here are some of my
          favorite coding projects, ranging from front-end to full-stack. Click
          on the images to view the live demos and GitHub repositories.
        </p>
      </div>
      <div className="mx-auto max-w-5xl 2xl:max-w-screen-2xl">
        <ul className="flex flex-wrap justify-center">
          {myProjects.map((project) => (
            <li
              key={project.name}
              className="m-4 w-full divide-y divide-gray-200 rounded-lg bg-white shadow sm:max-w-lg lg:max-w-2xl xl:max-w-md"
            >
              <div className="group relative">
                <Image
                  className="transform rounded-t-lg object-cover shadow-md transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-50"
                  src={project.image}
                  alt={project.name}
                  width={1000}
                  height={600}
                />
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
              </div>
              <div
                style={{
                  boxShadow:
                    "inset 35px 35px 71px #3c2040 inset -35px -35px 71px #4a284e",
                }}
              ></div>
              <div className="flex-1 p-6">
                <h3 className="text-lg font-medium text-gray-900">
                  {project.name}
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  {project.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="mb-2">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
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
                <div className="mt-4">
                  {project.techstack.map((tag) => (
                    <span
                      key={tag}
                      className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 transition duration-300 ease-out hover:-translate-y-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
              </div>
            </li>
          ))}
          <li
            key={"more"}
            className="m-4 w-full divide-y divide-gray-200 rounded-lg bg-white shadow sm:max-w-lg lg:max-w-2xl xl:max-w-md"
          >
            <div
              style={{
                boxShadow:
                  "inset 70px 70px 140px #ccb4e3, inset -70px -70px 140px #dcc2f5",
              }}
              className="h-64 rounded-t-lg bg-gradient-to-tr from-purple-100 to-indigo-100"
            ></div>
            <div className="flex-1 p-6">
              <h3 className="text-lg font-medium text-gray-900">
                More Projects Coming Soon!
              </h3>
              <div className="mt-2 text-sm text-gray-500">
                I'm always working on something new and exciting to improve my
                skills and make cool things. Keep an eye out for future updates
                and projects!
              </div>
              <div className="mt-4">
                <span className="me-2 mr-2 rounded border border-purple-400 bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400">
                  Under construction 👷‍♂️
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
