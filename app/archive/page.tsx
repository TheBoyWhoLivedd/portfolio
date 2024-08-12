import Link from "next/link";
import React from "react";
import ProjectTable from "../components/ProjectTable";
import { projectsTableData } from "../lib/linksData";

const archive = () => {
  return (
    <div className="lg:py-24">
      <Link
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-secondary"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          ></path>
        </svg>
        Ronnie Ayesigwa
      </Link>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        All Projects
      </h1>
      <ProjectTable data={projectsTableData} />
    </div>
  );
};

export default archive;
