import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-indigo-900 to-indigo-950 py-8 sm:py-16 ">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 px-6 sm:flex-row sm:px-12 md:px-24 lg:gap-20 lg:px-32 ">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Hi, I&apos;m <span className="text-purple-400">Patrick</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            I&apos;m a passionate &lt;web developer&gt; with a love for all
            things technology! Currently I&apos;m a computer science student in
            Darmstadt, Germany.
          </p>
          <div className="mt-4 flex flex-col">
            <a
              href="https://github.com/paddomanno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-gray-200 hover:text-gray-400"
            >
              <button
                type="button"
                className=" mb-2 mr-2 h-12 w-64 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" className="pe-2" />
                Visit My Github Profile
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="sm"
                  className="ps-2"
                />
              </button>
            </a>
            <Link href="#portfolio">
              <button
                type="button"
                className=" mb-2 mr-2 h-12 w-64 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
              >
                <FontAwesomeIcon icon={faBook} size="lg" className="pe-2" />
                Check Out My Projects
              </button>
            </Link>
            {/* <Link href="#contact">
              <button
                type="button"
                className="mb-2 mr-2 h-12 w-64 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="pe-2" />
                Get In Touch
              </button>
            </Link> */}
            <p className="mt-2 text-lg text-gray-200">
              The code for this website can be found in{" "}
              <a
                className="hober:underline text-purple-500 hover:text-purple-600"
                href="https://github.com/paddomanno/portfolio-next"
                target="_blank"
                rel="noopener noreferrer"
              >
                this GitHub repo
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mx-10 max-w-xs flex-1 md:mx-0">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:animate-spin-slow-reverse before:rounded-full before:bg-gradient-conic before:from-white before:to-transparent before:opacity-30 before:blur-2xl before:content-[''] after:absolute after:z-10 after:h-[180px] after:w-[240px] after:translate-x-48 after:animate-move-and-spin after:bg-gradient-conic after:from-sky-700 after:via-purple-700 after:opacity-80 after:blur-2xl after:content-[''] before:lg:h-[360px]">
            <Image
              src="/images/hero-image-1.PNG"
              alt="Hero Image"
              width={500}
              height={500}
              className="z-20 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
