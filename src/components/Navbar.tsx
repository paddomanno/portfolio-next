import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="bg-indigo-950">
      <div className="mx-w-5xl mx-6 sm:mx-12 md:mx-24 lg:mx-auto lg:max-w-screen-lg lg:px-32">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center">
            <div className="flex-shrink-0">
              {/* <Image src="/logo.svg" alt="Logo" width={32} height={32} /> */}
              <h1 className="pb-1 text-3xl font-extrabold tracking-tight text-purple-400">
                PF
              </h1>
            </div>
            <div className="hidden sm:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="#about">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple-700 hover:text-white">
                    About
                  </p>
                </Link>
                <Link href="#portfolio">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple-700 hover:text-white">
                    Portfolio
                  </p>
                </Link>
                <Link href="#contact">
                  <p className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple-700 hover:text-white">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="ml-auto text-gray-300 transition-transform hover:scale-110">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <FontAwesomeIcon icon={faSun} size={"lg"} />
                ) : (
                  <FontAwesomeIcon icon={faMoon} size={"lg"} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
