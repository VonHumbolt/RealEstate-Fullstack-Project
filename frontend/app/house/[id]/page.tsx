import HouseDetailCard from "@/components/HouseDetailCard";
import Slider from "@/components/Slider";
import { HouseService } from "@/services/house.service";
import { House } from "@/types/house";
import React from "react";

async function getHouseById(id:number): Promise<House> {
  const houseService = new HouseService();
  const response = await houseService.getById(id);
  return response.data;
}

async function SearchDetail({params} : {params: Promise<{id: number}>}) {

  const id = (await params).id
  const house = await getHouseById(id);
  
  return (
    <>
      <section className="max-w-7xl mx-auto mt-3 px-8 md:mt-6 lg:mt-10 md:px-10">
        <div className="flex justify-between gap-5">
          <Slider images={house.image} />
          <HouseDetailCard house={house} />
        </div>
      </section>

      {/* Similar houses nearby */}
    </>
  );
}

export default SearchDetail;
