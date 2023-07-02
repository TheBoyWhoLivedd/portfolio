import Hero from "./components/Hero";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen mx-auto max-w-screen-xl px-6 py-12 font-sansmd:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg: gap-4">
        <Header />
        <Hero />
      </div>
    </main>
  );
}
