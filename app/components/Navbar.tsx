import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative cursor-pointer">
            <Image src="/printforge-logo.svg" alt="PrintForge Logo" width={200} height={40} className="hidden md:block" />
            <Image src="/printforge-logo-icon.svg" alt="PrintForge Logo" width={40} height={40} className="block md:hidden" />
          </div>
        </Link>
        <ul className="flex items-center gap-2.5">
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/3d-models">3D Models</Link>
          </li>
          <li className="text-sm uppercase cursor-pointer">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
