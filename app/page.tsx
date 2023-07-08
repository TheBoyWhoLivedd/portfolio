import Hero from "./components/Hero";
import Header from "./components/Header";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg: gap-4">
      <Header />
      <Hero />
    </div>
  );
}
