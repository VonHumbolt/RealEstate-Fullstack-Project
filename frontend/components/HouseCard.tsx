import { House } from "@/types/house";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import React from "react";

function HouseCard({ house }: { house: House }) {

  return (
    <div className="rounded-xl max-w-md border">
      <img
        src={house.image}
        alt={house.title}
        className="rounded-t-xl w-full h-48 object-cover"
      />
      <div className="px-4 py-2">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">₺{house.price}</p>
          <p className="px-4 py-2 bg-red-200 w-fit rounded-full text-xs font-bold">
            For {house.type.toLowerCase()}
          </p>
        </div>
        <h2 className="text-base font-bold mt-2">{house.title}</h2>
        <div className="flex items-center mt-1 mb-3 space-x-1">
          <MapPin size={16} color="#6b7280" />
          <p className="text-sm text-gray-500 line-clamp-1">{house.location}</p>
        </div>
        <hr />
        <div className="flex justify-between items-center text-sm mt-3 mb-3">
          <div className="flex items-center space-x-1">
            <Ruler size={16} color="black" />
            <p>{house.totalArea} sqft</p>
          </div>
          <div className="flex items-center space-x-1">
            <BedDouble size={16} color="black" />
            <p className="">{house.roomCount} room.</p>
          </div>
          <div className="flex items-center space-x-1">
            <Bath size={16} color="black" />
            <p>{house.bathCount} bath.</p>
          </div>
        </div>
        <hr />
        <div className="text-sm mt-2">
          <h1 className="font-bold">{house.owner.fullname}</h1>
          <p>{house.owner.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
