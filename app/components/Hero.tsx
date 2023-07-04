import React from "react";
import Experience from "./Experiences";
import { experiences } from "../lib/linksData";

const Hero = () => {
  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            In 2021, during the final stretch of my campus life, I embarked on a
            journey into the tech world. Since December 2021, I&apos;ve been
            proud to contribute my skills to{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://www.hitajitech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hitaji Technologies
            </a>
            . Here, we&apos;re dedicated to making a difference. Our work
            includes impactful projects like building a software solution for an
            NGO assisting underprivileged Ugandans and developing a precise
            calculation tool for the{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://materialschedule.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uganda Revenue Authority
            </a>{" "}
            quantity surveyors, streamlining their bill of quantities (BOQs)
            processes.
          </p>
          <p className="mb-4">
            On the side, my passion for artificial intelligence has led to the
            creation of an{" "}
            <a
              className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
              href="https://hitajichat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI-powered app
            </a>
            , allowing users to upload documents and query or summarize them,
            optimizing information access.
          </p>
          <p className="mb-4">
            When I&apos;m not coding or innovating, I&apos;m often found in the
            pool, trying to channel my inner Caeleb Dressel, or in the gym,
            working to match his physique. Whether it&apos;s in my work or
            personal life, I&apos;m driven by a desire to learn, grow, and
            improve, every day.
          </p>
        </div>
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ul className="group/list">
            {" "}
            {experiences.map((exp, index) => (
              <Experience key={index} {...exp} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Hero;
