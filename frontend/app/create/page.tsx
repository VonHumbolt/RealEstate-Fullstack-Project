import { auth } from "@/auth";
import CreateForm from "@/components/CreateForm";
import { redirect } from "next/navigation";
import React from "react";

async function Page() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="max-w-7xl mx-auto mt-6 md:mt-12 flex flex-col items-center">
      <h1 className="font-extrabold text-4xl mb-10 text-center">
        {" "}
        <span className="font-black text-5xl text-black">Rent or Sale</span> <br /> House
      </h1>
      <CreateForm />
    </div>
  );
}

export default Page;
