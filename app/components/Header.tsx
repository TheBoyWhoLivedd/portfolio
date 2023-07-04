import React from "react";
import NavLink from "./NavLink";
import SocialLinks from "./SocialLinks";
import { socialMediaLinks } from "../lib/linksData";

const links = ["about", "experience", "projects"];

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Ronnie Ayesigwa</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full Stack Developer at Hitaji Technologies
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I&apos;m a frontend developer, optimist, and life long learner. I
          create web-based solutions and digital experiences that prioritize
          accessibility and inclusivity.
        </p>
        <nav className="hidden lg:block" aria-label="In-page Jump Links">
          <ul className="mt-16 w-max">
            {links.map((link, index) => (
              <NavLink key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
      <ul className="ml-1 mt-8 flex items-center">
        {socialMediaLinks.map((link, index) => (
          <SocialLinks
            key={index}
            link={link.href}
            name={link.name}
            d={link.d}
            viewBox={link.viewBox}
          />
        ))}
      </ul>
    </header>
  );
};

export default Header;
