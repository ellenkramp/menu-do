"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-primary text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold tracking-tight">
        Menu Do
      </Link>
      <div className="space-x-4">
        <Link href="/menu" className="hover:underline">
          Menu
        </Link>
        <Link href="/rewards" className="hover:underline">
          Rewards
        </Link>
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>
      </div>
    </nav>
  );
}
