import React, { useState } from "react";
import Form from "next/form";
import { Button } from "./ui/button";
import Link from "next/link";

function Header() {

  return (
    <header className="flex justify-between items-center p-4 md:px-8 md:py-6 shadow-sm max-w-7xl mx-auto">
      <Link href="/">
        <h1 className="font-extrabold">Real Estate</h1>
      </Link>
      
      <Form action="/search">
        <input name="query" className="border rounded-3xl p-2 text-sm mr-1 md:mr-2 w-auto md:w-96" placeholder="Houses, locations..." />
        <Button type="submit" className="bg-red-200 rounded-3xl hover:bg-teal-200 text-xs md:text-base">Search</Button>
      </Form>


      <div className="flex justify-center items-center space-x-2 md:space-x-4 text-sm md:text-base">
        <Link href="/login">
          <h1 className="cursor-pointer hover:underline">Login</h1>
        </Link>
        <Link href="/signup">
          <h1 className="cursor-pointer hover:underline">Sign Up</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;
