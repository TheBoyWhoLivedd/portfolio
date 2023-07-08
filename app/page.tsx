import Hero from "./components/Hero";
import Header from "./components/Header";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    // <main className="flex mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
    //   <div className="lg:flex lg:justify-between lg: gap-4">
    //     <Link
    //       href="#content"
    //       className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
    //     >
    //       Skip to Content
    //     </Link>
    //   </div>
    // </main>
    <React.Fragment>
      <Header />
      <Hero />
    </React.Fragment>
  );
}
