"use client";
import { House } from "@/types/house";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function HouseCard({ house }: { house: House }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      className="rounded-xl max-w-md border shadow-md shadow-secondary/20 cursor-pointer hover:scale-105 transition duration-200 ease-in-out"
    >
      <Link href={`/house/${house.id}`}>
      <Image
        src={house.image[0]}
        alt={house.title}
        width={1200}
        height={1200}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mt-2">
          <p className="text-2xl text-black font-bold">₺{house.price.toLocaleString()}</p>
          {house.type.toLowerCase() == "sale" ? (
            <p className="px-4 py-2 bg-secondary w-fit text-white rounded-full text-xs font-bold">
              For {house.type.toLowerCase()}
            </p>
          ) : (
            <p className="px-4 py-2 bg-primary-200 w-fit text-white rounded-full text-xs font-bold">
              For {house.type.toLowerCase()}
            </p>
          )}
        </div>
        <h2 className="text-lg font-semibold mt-2">{house.title}</h2>
        <div className="flex items-center mt-1 mb-3 space-x-1">
          <MapPin size={16} className="text-white-200" />
          <p className="text-sm text-white-200 line-clamp-1">
            {house.location}
          </p>
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm mt-3 mb-3">
          <div className="flex items-center space-x-1">
            <Ruler size={18} className="text-white-200" />
            <p className="text-black font-semibold text-base">
              {house.totalArea}{" "}
              <span className="text-black-100 font-medium">sqft</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <BedDouble size={18} className="text-white-200" />
            <p className="text-black font-semibold text-base">
              {house.roomCount}{" "}
              <span className="text-black-100 font-medium">room.</span>
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <Bath size={18} className="text-white-200" />
            <p className="text-black font-semibold text-base">
              {house.bathCount}{" "}
              <span className="text-black-100 font-medium">bath.</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="text-sm mt-2">
          <h1 className="font-bold">{house.owner.fullname}</h1>
          <p className="text-white-200 font-medium">
            {house.owner.phoneNumber}
          </p>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}

export default HouseCard;
