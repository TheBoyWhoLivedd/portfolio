import Link from "next/link";
import Image from "next/image";
import React from "react";
import { projects, projectsTableData } from "../../lib/linksData";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const allProjects = [
    ...projects.map((p) => ({ slug: p.slug })),
    ...projectsTableData.map((p) => ({ slug: p.slug })),
  ];

  return allProjects;
}

export default function ProjectDetail({ params }: PageProps) {
  // Find project in both arrays
  const mainProject = projects.find((p) => p.slug === params.slug);
  const tableProject = projectsTableData.find((p) => p.slug === params.slug);

  const project = mainProject || tableProject;

  if (!project) {
    notFound();
  }

  // Helper function to check if project has external links
  const hasExternalLinks = () => {
    if ("url" in project && project.url) return true;
    if ("links" in project && project.links && project.links.length > 0)
      return true;
    return false;
  };

  return (
    <div className="lg:py-24">
      {/* Back navigation */}
      <Link
        className="group mb-8 inline-flex items-center font-semibold leading-tight text-secondary hover:text-black transition-colors"
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
        Back to Portfolio
      </Link>

      <div className="max-w-4xl">
        {/* Header Section */}
        <header className="mb-8">
          <div className="mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl mb-4">
              {"title" in project ? project.title : project.project}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
              {"year" in project && (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.year}
                </span>
              )}
              {"madeAt" in project && (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.madeAt}
                </span>
              )}
              {"duration" in project && (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.duration}
                </span>
              )}
              {"teamSize" in project && (
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                  {project.teamSize}
                </span>
              )}
              {project.isNDA && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Confidential Project
                </span>
              )}
            </div>
          </div>

          {/* Project Image or Placeholder */}
          <div className="mb-8">
            {"imageSrc" in project && project.imageSrc ? (
              <div className="relative rounded-lg overflow-hidden bg-slate-100 shadow-lg">
                <Image
                  src={project.imageSrc}
                  alt={"title" in project ? project.title : project.project}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            ) : (
              <div className="relative h-64 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <svg
                    className="mx-auto h-16 w-16 text-blue-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <p className="text-blue-600 font-medium">Project Under NDA</p>
                  <p className="text-blue-500 text-sm">
                    Visuals not available for confidential projects
                  </p>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Project Description */}
        <section className="mb-8">
          <p className="text-lg leading-relaxed text-slate-700">
            {project.description}
          </p>
        </section>

        {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-secondary mb-4">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {"technologies" in project
              ? project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-accent"
                  >
                    {tech}
                  </span>
                ))
              : "builtWith" in project
              ? project.builtWith.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-accent"
                  >
                    {tech}
                  </span>
                ))
              : null}
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                The Challenge
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {project.clientProblem}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                The Solution
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features (if available) */}
        {"keyFeatures" in project && project.keyFeatures && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-secondary mb-4">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <svg
                    className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact & Role */}
        {"impact" in project && project.impact && (
          <section className="mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <h2 className="text-xl font-semibold text-secondary mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Impact & Results
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                {project.impact}
              </p>
              {"role" in project && project.role && (
                <p className="text-sm text-slate-600">
                  <strong>My Role:</strong> {project.role}
                </p>
              )}
            </div>
          </section>
        )}

        {/* External Links (if available and not NDA) */}
        {hasExternalLinks() && !project.isNDA && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-secondary mb-4">
              Project Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {"url" in project && project.url && (
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Live Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
              {"links" in project &&
                project.links &&
                project.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    {link.url.includes("github.com") ? (
                      <>
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Code
                      </>
                    ) : (
                      <>
                        {link.label}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </Link>
                ))}
            </div>
          </section>
        )}

        {/* NDA Notice */}
        {project.isNDA && (
          <section className="mb-8">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="text-amber-800 font-semibold mb-2">
                    Confidential Project
                  </h3>
                  <p className="text-amber-700 text-sm">
                    This project is under a Non-Disclosure Agreement (NDA).
                    While I can share the problems we solved and our approach,
                    specific implementation details, client information, and
                    live project links cannot be displayed publicly.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="pt-8 border-t border-slate-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-secondary mb-4">
              Interested in working together?
            </h3>
            <a
              href="mailto:ayesigwar@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-black transition-colors"
            >
              Send me an email (ayesigwar@gmail.com)
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
