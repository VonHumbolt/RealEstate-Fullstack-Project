import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut } from "@/auth";

async function Header() {
  const session = await auth();

  return (
    <header className="shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8 md:py-6 ">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src={"/estate-logo.png"}
              alt="logo"
              width={32}
              height={32}
              className="size-8 object-contain"
            />
            <h1 className="text-xl font-black">Estate</h1>
          </div>
        </Link>

        {session ? (
          <div className="flex justify-center items-center space-x-2 md:space-x-4 text-sm md:text-base font-semibold">
            <Link href="/create">
              <h1 className="cursor-pointer hover:underline">Create</h1>
            </Link>
            <Link href="/user">
              <h1 className="cursor-pointer hover:underline">Profile</h1>
            </Link>
            <h1
              className="cursor-pointer hover:underline"
              onClick={async () => {
                "use server";
                await signOut({ redirectTo: "/login" });
              }}
            >
              Logout
            </h1>
          </div>
        ) : (
          <div className="flex justify-center items-center space-x-2 md:space-x-4 text-sm md:text-base font-semibold">
            <Link href="/login">
              <h1 className="cursor-pointer hover:underline">Login</h1>
            </Link>
            <Link href="/signup">
              <h1 className="cursor-pointer hover:underline">Sign Up</h1>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
