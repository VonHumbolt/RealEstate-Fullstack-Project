'use client'
import Form from "next/form";
import Link from "next/link";
import React from "react";

function Login() {

    const login = (e: any) => {
        console.log(e)
    }

  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12 flex justify-center">
      <Form
        action={login}
        className="bg-white p-6 rounded-xl border shadow-md w-96 md:w-[650px]"
      >
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="border rounded-xl p-2"
          />
        </div>

        <div className="flex flex-col space-y-1 mt-4">
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="*****"
            className="border rounded-xl p-2"
          />
        </div>

        <button className="bg-red-400 text-white py-2 px-4 rounded-md mt-4 w-full">
          Login
        </button>

        <p className="text-gray-500 text-sm mt-4">
          Don't you have an account?{" "}
          <Link href={"/signup"}>
            <span className="text-red-400 hover:underline cursor-pointer">Create an account!</span>
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
