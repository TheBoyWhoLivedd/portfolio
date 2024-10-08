import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import HoverEffect from "./components/HoverEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ronnie Ayesigwa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="__variable_20b187 group/spotlight relative">
          <HoverEffect />
          <div className=" mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <Link
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-[#e3dfd3] from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
            >
              Skip to Content
            </Link>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
