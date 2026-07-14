import React from "react";
import Experience from "./Experiences";
import { experiences, projects } from "../lib/linksData";
import Project from "./Projects";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="About Me"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#e3dfd3] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            I&apos;m a full-stack and applied AI engineer with six years of
            experience shipping production SaaS, mobile, government, and
            financial systems. I&apos;m the founding engineer at{" "}
            <span className="font-semibold text-secondary">
              Hitaji Technologies
            </span>
            , where I&apos;m building{" "}
            <Link
              className="font-semibold text-secondary hover:text-black focus-visible:text-black"
              href="https://hitajitechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hitaji 360
            </Link>
            , where I work across 11 production services and build authorized
            AI agents, payment infrastructure, and products for schools,
            SACCOs, legal teams, agriculture, and construction.
          </p>
          <p className="mb-4">
            Before that I spent six months at{" "}
            <Link
              className="font-semibold text-secondary hover:text-black focus-visible:text-black"
              href="https://www.turing.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Turing
            </Link>{" "}
            on a Google DeepMind project, evaluating Gemini against real
            open-source repositories and turning observed failures into 200+
            training and evaluation tasks. That work shaped how I approach AI:
            build the system, measure it against real work, and keep humans at
            the decisions where mistakes matter.
          </p>
          <p className="mb-4">
            I&apos;ve also cut{" "}
            <Link
              className="font-semibold text-secondary hover:text-black focus-visible:text-black"
              href="https://www.khoros.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khoros&apos;
            </Link>{" "}
            CloudWatch spend by approximately $129K a year, and spent two years
            at the{" "}
            <Link
              className="font-medium text-secondary hover:text-black focus-visible:text-teal-300"
              href="https://ura.go.ug/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Uganda Revenue Authority
            </Link>{" "}
            building the portal financial institutions use to file cross-border
            account data under OECD tax-transparency rules. The common thread is
            dependable software for workflows where correctness matters.
          </p>
          <p className="mb-4">
            I&apos;m based in Kampala and available for remote full-stack and
            applied AI roles. When I&apos;m not building, I&apos;m usually in the
            pool or somewhere with a book.
          </p>
        </div>
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Work experience"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#e3dfd3] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
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
          <div className="mt-12">
            <Link
              className="inline-flex items-center font-medium leading-tight text-secondary font-semibold text-secondary group"
              aria-label="View Full Résumé"
              href="https://1d1d80ogr0.ufs.sh/f/BhhFqnIpzN8iLNCGd10DqXwsTAlgB9WkjZPrad4bLH823cJY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Résumé
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
        aria-label="Selected projects"
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#e3dfd3] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-secondary lg:sr-only">
            Projects
          </h2>
        </div>
        <div>
          <ul className="group/list">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </ul>
          <div className="mt-12">
            <Link
              className="inline-flex items-center font-medium leading-tight text-secondary font-semibold text-secondary group"
              aria-label="View Full Project Archive"
              href="/archive"
            >
              <span>
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  View Full Project{" "}
                </span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    Archive
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
