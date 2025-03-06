import { auth, signIn } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function Login() {

  const session = await auth()

  if(session) redirect("/") 

  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12 flex justify-center">
      <form
        action={async (formData) => {
          "use server"
          await signIn("credentials", formData)
        }}
       className="bg-white p-6 rounded-xl border shadow-md w-96 md:w-[650px]"
      >
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="border rounded-xl p-2"
          />
        </div>

        <div className="flex flex-col space-y-1 mt-4">
          <label className="text-sm">Password</label>
          <input
            name="password"
            type="password"
            placeholder="*****"
            className="border rounded-xl p-2"
          />
        </div>

        <button className="bg-primary text-white py-2 px-4 rounded-md mt-4 w-full">
          Login
        </button>

        <p className="text-gray-500 text-sm mt-4">
          Don't you have an account?{" "}
          <Link href={"/signup"}>
            <span className="text-primary hover:underline cursor-pointer">Create an account!</span>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
