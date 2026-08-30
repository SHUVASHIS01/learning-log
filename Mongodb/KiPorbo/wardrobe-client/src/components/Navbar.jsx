"use client";

import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    };

    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl font-bold">
                    Wardrobe Rotation
                </Link>
            </div>
            <div className="flex-none gap-2">
                {session ? (
                    <>
                        <Link href="/wardrobe" className="btn btn-ghost">Dashboard</Link>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-10">
                                    <span className="text-xs">{session.user.name?.charAt(0).toUpperCase() || "U"}</span>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li className="menu-title px-4 py-2">
                                    <span className="text-sm font-medium">{session.user.name}</span>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="text-error">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link href="/sign-in" className="btn btn-ghost">Sign In</Link>
                        <Link href="/sign-up" className="btn btn-primary">Sign Up</Link>
                    </>
                )}
            </div>
        </div>
    );
}
