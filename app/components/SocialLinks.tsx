import Link from "next/link";
import React from "react";

interface SocialProps {
  link: string;
  name: string;
  d: string;
  viewBox: string;
}

const SocialLinks = ({ link, name, d, viewBox }: SocialProps) => {
  return (
    <li className="mr-5 text-xs">
      <Link
        className="block hover:text-slate-200"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only">{name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d={d}></path>
        </svg>
      </Link>
    </li>
  );
};

export default SocialLinks;
