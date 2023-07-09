import Link from "next/link";
import React from "react";

interface ProjectData {
  year: string;
  project: string;
  madeAt: string;
  builtWith: string[];
  links: { url: string; label: string }[];
}

interface ProjectTableProps {
  data: ProjectData[];
}

const ProjectTable: React.FC<ProjectTableProps> = ({ data }) => {
  return (
    <table id="content" className="mt-12 w-full border-collapse text-left">
      <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
        <tr>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
            Year
          </th>
          <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
            Project
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Made at
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
            Built with
          </th>
          <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className="border-b border-slate-300/10 last:border-none"
          >
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">{row.year}</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span> {row.project}</span>
                </div>
                <div className="hidden sm:block">{row.project}</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                {row.madeAt}
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                {row.builtWith.map((tech, index) => (
                  <li key={index} className="my-1 mr-1.5">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                {row.links.map((link, index) => (
                  <li key={index} className="mb-1 flex items-center">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm whitespace-nowrap"
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={link.label}
                    >
                      <span className="inline-flex items-center">
                        {link.url.includes("github.com")
                          ? "GitHub"
                          : link.label}
                        {link.url.includes("github.com") ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="ml-1.5 h-3.5 w-3.5 shrink-0"
                            aria-hidden="true"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        )}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
