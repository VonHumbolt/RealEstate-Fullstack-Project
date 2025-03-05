"use client";

import { House } from "@/types/house";
import React from "react";
import { motion } from "framer-motion";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";

function HouseDetailCard({ house }: { house: House }) {
    console.log("hosued", house)
  return (
    <motion.div
    initial={{opacity: 0, x: 100}}
    whileInView={{opacity: 1, x:0}}
    transition={{ease: 'easeOut', duration:1}}
      className="bg-white shadow-lg w-1/2 shadow-secondary/10 border border-white-100 p-6 rounded-xl"
    >
        <div className="flex justify-between items-center mt-3">
            <p className='font-bold text-4xl'>${house.price.toLocaleString()}</p>
            {house.type.toLowerCase() == "sale" ? (
            <p className="px-5 py-2 bg-secondary w-fit text-white rounded-full text-base font-bold">
              For {house.type.toLowerCase()}
            </p>
          ) : (
            <p className="px-5 py-2 bg-primary-200 w-fit text-white rounded-full text-base font-bold">
              For {house.type.toLowerCase()}
            </p>
          )}
        </div>
        <h2 className="text-2xl font-semibold mt-5">{house.title}</h2>
        <div className="flex items-center mt-6 mb-10 space-x-1">
          <MapPin size={36} className="text-white-200" />
          <p className="text-xl text-white-200">
            {house.location}
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm my-6">
          <div className="flex items-center space-x-1">
            <Ruler size={24} className="text-white-200" />
            <p className="text-black font-semibold text-xl">
              {house.totalArea}{" "}
              <span className="text-black-100 font-medium">sqft</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <BedDouble size={24} className="text-white-200" />
            <p className="text-black font-semibold text-xl">
              {house.roomCount}{" "}
              <span className="text-black-100 font-medium">room.</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Bath size={24} className="text-white-200" />
            <p className="text-black font-semibold text-xl">
              {house.bathCount}{" "}
              <span className="text-black-100 font-medium">bath.</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="text-sm mt-8">
          <h1 className="font-bold text-lg">{house.owner.fullname}</h1>
          <p className="text-white-200 font-medium text-base">
            {house.owner.phoneNumber}
          </p>
        </div>
        
    </motion.div>
  );
}

export default HouseDetailCard;
