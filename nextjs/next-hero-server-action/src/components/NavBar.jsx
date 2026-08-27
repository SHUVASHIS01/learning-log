import Link from "next/link";
import ThemeToggle from "./ThemeTogle";

function Logo() {
  return (
    <span
      aria-hidden="true"
      className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-sm font-bold text-background"
    >
      A
    </span>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
        </ul>
        <div>
            <ThemeToggle></ThemeToggle>
        </div>
      </header>
    </nav>
  );
}
