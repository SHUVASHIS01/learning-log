import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function LandingPage() {
  const session = await auth.api.getSession({
      headers: await headers()
  });

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">WARDROBE ROTATION</h1>
          <p className="py-6 text-xl">
            Wear smarter. Rotate better.
          </p>
          <p className="pb-6">
            A smart personal wardrobe management and outfit rotation app. Keep track of what you own, when you last wore it, and get intelligent recommendations so your clothes never gather dust.
          </p>
          {session ? (
            <Link href="/wardrobe" className="btn btn-primary">Go to Dashboard</Link>
          ) : (
            <div className="flex gap-4 justify-center">
              <Link href="/sign-up" className="btn btn-primary">Get Started</Link>
              <Link href="/sign-in" className="btn btn-outline">Sign In</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
