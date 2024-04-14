import Image from "next/image";
import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
// import { UserButton, currentUser } from "@clerk/nextjs";

type Props = {};

const Navbar = async (props: Props) => {
  //   const user = await currentUser();
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Fu</p>
        <Image
          src="/fuzzieLogo.png"
          width={15}
          height={15}
          alt="fuzzie logo"
          className="shadow-sm"
        />
        <p className="text-3xl font-bold">zie</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="inline-flex h-10 overflow-hidden animate-shimmer items-center justify-center rounded-lg border border-slate-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
        >
          {/* WIP : wire up user */}
          {true ? "Dashboard" : "Get Started"}
        </Link>
        <MenuIcon className="md:hidden" />
      </aside>
    </header>
  );
};

export default Navbar;
