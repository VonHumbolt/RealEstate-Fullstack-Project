"use client";
import { AuthService } from "@/services/auth.service";
import { SignupDto } from "@/types/signup.dto";
import Form from "next/form";
import Link from "next/link";
import React from "react";

function Signup() {

  const authService = new AuthService();

  const signup = (formData: FormData) => {
    const data = {
      fullname: formData.get("fullname"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      password: formData.get("password"),
    } as SignupDto;

    authService.signup(data).then(res => {
      // next auth
      console.log(res.data)
    })
  };

  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12 flex justify-center">
      <Form
        action={signup}
        className="bg-white p-6 rounded-xl border shadow-md w-96 md:w-[650px]"
      >
        <div className="flex flex-col space-y-1">
          <label className="text-sm">Fullname</label>
          <input
            name="fullname"
            type="text"
            placeholder="Alex Krissy"
            className="border rounded-xl p-2"
          />
        </div>

        <div className="flex flex-col space-y-1 mt-4">
          <label className="text-sm">Email</label>
          <input
            name="email"
            type="email"
            placeholder="example@gmail.com"
            className="border rounded-xl p-2"
          />
        </div>

        <div className="flex flex-col space-y-1 mt-4">
          <label className="text-sm">Phone number</label>
          <input
            name="phoneNumber"
            type="number"
            placeholder="+90 555 555 55 55"
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
          Signup
        </button>

        <p className="text-gray-500 text-sm mt-4">
          Do you have an account?{" "}
          <Link href={"/login"}>
            <span className="text-primary hover:underline cursor-pointer">
              Login now!
            </span>
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Signup;
