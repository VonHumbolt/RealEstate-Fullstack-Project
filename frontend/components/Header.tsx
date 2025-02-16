import React from "react";
import Form from "next/form";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:px-8 md:py-6 shadow-sm">
      <h1>Real Estate</h1>
      <Form action="/search">
        <input name="query" />
        <Button type="submit" className="bg-red-200 hover:bg-teal-200">Search</Button>
      </Form>
      <div className="flex">
        <h1>Login/</h1>
        <h1>Sign Up</h1>
      </div>
    </header>
  );
}

export default Header;
