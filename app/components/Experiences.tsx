import Link from "next/link";
import React from "react";

interface ExperienceProps {
  startYear: string;
  endYear: string;
  position: string;
  company: string;
  url: string;
  previousRoles?: string[];
  responsibilities: string;
  technologies: string[];
}

const Experience = ({
  startYear,
  endYear,
  position,
  company,
  url,
  previousRoles,
  responsibilities,
  technologies,
}: ExperienceProps) => {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#f6f5f4] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
          aria-label={`${startYear} to ${endYear}`}
        >
          {startYear} — {endYear}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-secondary">
            <div>
              <Link
                className="inline-flex items-baseline font-medium leading-tight text-secondary hover:text-black focus-visible:text-teal-300  group/link text-base"
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${position} at ${company}`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                <span>
                  {position} ·{" "}
                  <span className="inline-block">
                    {company}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </Link>
            </div>
          </h3>
          {previousRoles?.map((role) => (
            <div key={role}>
              <div className="text-slate-500" aria-hidden="true">
                {role}
              </div>
            </div>
          ))}
          <p className="mt-2 text-sm leading-normal">{responsibilities}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium leading-5 text-accent ">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Experience;
