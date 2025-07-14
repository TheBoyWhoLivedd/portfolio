import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectProps {
  title: string;
  slug: string;
  description: string;
  url: string;
  imageSrc: string;
  technologies: string[];
  isNDA?: boolean;
}

const Project = ({
  title,
  slug,
  description,
  url,
  imageSrc,
  technologies,
  isNDA = false,
}: ProjectProps) => {
  // Always link to internal details page first
  const linkHref = `/projects/${slug}`;

  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#f6f5f4] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <Link
              className="inline-flex items-baseline font-medium leading-tight text-secondary hover:text-black focus-visible:text-teal-300  group/link text-base"
              href={linkHref}
              aria-label={title}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span className="flex items-center">
                {title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
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
        <div className="relative sm:order-1 sm:col-span-2 sm:translate-y-1">
          {imageSrc ? (
            <Image
              alt={title}
              loading="lazy"
              width="200"
              height="48"
              decoding="async"
              data-nimg="1"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
              src={imageSrc}
            />
          ) : (
            <div className="h-20 w-[200px] md:w-auto rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default Project;
