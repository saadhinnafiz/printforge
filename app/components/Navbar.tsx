"use client";

import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4 pr-2">
        <Link href="/">
          <div className="relative cursor-pointer">
            <Image
              src="/printforge-logo.svg"
              alt="PrintForge Logo"
              width={200}
              height={40}
              className="hidden md:block"
            />
            <Image
              src="/printforge-logo-icon.svg"
              alt="PrintForge Logo"
              width={40}
              height={40}
              className="block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>
          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
