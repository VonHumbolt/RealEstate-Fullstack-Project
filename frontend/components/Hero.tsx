'use client'
import { SearchIcon } from "lucide-react";
import Form from "next/form";
import React from "react";
import {motion} from "framer-motion"

function Hero({query}: {query?: string}) {
  return (
    <motion.main 
        initial={{opacity:0, y: -200}}
        whileInView={{  opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
    className="flex flex-col justify-center items-center">
      <h1 className="font-black text-7xl text-center text-black">Find the best house <br /> for you</h1>
      <div className="flex justify-center items-center w-full">
        <Form action="/" className="relative w-1/2">
            <SearchIcon className="size-8 text-white-200 absolute top-12 left-4" />
            <input
            name="query"
            defaultValue={query}
            className="border border-white-200 rounded-full px-14 py-5 text-xl font-semibold placeholder:text-white-200 mr-1 md:mr-2 my-8 w-full shadow-2xl"
            placeholder="Houses, locations and so on..."
            />
        </Form>

      </div>
    </motion.main>
  );
}

export default Hero;
