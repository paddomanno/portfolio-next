import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import About from "~/components/About";
import Navbar from "~/components/Navbar";
import TechStack from "~/components/TechStack";
import Portfolio from "~/components/Portfolio";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Patrick Fender - Web Development Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed top-0 z-50 w-full">
        <Navbar />
      </header>
      <div className="flex h-screen flex-col">
        <main className="dark:bg-stone-950 dark:text-stone-100">
          <section id="about" className="pt-16">
            <About />
          </section>
          <section
            id="techstack"
            className="mx-8 mt-16 bg-indigo-100 px-8 py-12 shadow dark:bg-zinc-900 sm:mx-12 lg:mx-24"
          >
            <TechStack />
          </section>
          <section
            id="portfolio"
            className="mx-auto px-4 pt-16 sm:px-12 lg:px-24"
          >
            <Portfolio />
          </section>
          {/* <section
            id="contact"
            className="mx-8 mt-16 rounded-xl bg-indigo-900 px-6 py-12 text-white shadow dark:bg-indigo-950 sm:mx-12 lg:mx-24"
          >
            <Contact />
          </section> */}
          <div className="py-4"></div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
