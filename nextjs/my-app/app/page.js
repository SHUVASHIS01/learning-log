import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-full flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-4xl font-bold">Learning Log</h1>
      <p>Welcome to your React and Next.js app.</p>
      <Link className="btn btn-primary" href="/about">
        About
      </Link>
    </main>
  );
}