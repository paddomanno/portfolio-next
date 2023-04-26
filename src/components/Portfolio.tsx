import React from "react";
import myProjects from "../data/myProjects.json";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <>
      <div className="mx-auto max-w-5xl 2xl:max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold">My Projects</h2>
        <p className="mb-8 text-lg text-gray-500 dark:text-gray-300">
          As a self-taught web developer, I enjoy creating small projects to
          learn new technologies and improve my skills. Here are some of my
          favorite coding projects, ranging from front-end to full-stack. Click
          on the images to view the live demos and GitHub repositories.
        </p>
      </div>
      <div className="mx-auto max-w-5xl 2xl:max-w-screen-2xl">
        <ul className="flex flex-wrap justify-center">
          {myProjects.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} />
            </li>
          ))}
          <li>
            <ProjectCard
              project={{
                name: "More Projects Coming Soon!",
                description: [
                  "I'm always working on something new and exciting to improve my skills and make cool things. Keep an eye out for future updates and projects!",
                ],
                tags: ["Under construction 👷‍♂️"],
                image: null,
                techstack: null,
                demoLink: null,
                githubLink: null,
              }}
              customImage={
                <div
                  style={{
                    boxShadow:
                      "inset 70px 70px 140px #ccb4e3, inset -70px -70px 140px #dcc2f5",
                  }}
                  className="h-64 rounded-t-lg bg-gradient-to-tr from-purple-100 to-indigo-100"
                ></div>
              }
            />
          </li>
        </ul>
      </div>
    </>
  );
}
