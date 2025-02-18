import HouseCard from "@/components/HouseCard";
import { HouseService } from "@/services/house.service";
import { House } from "@/types/house";
import React from "react";

async function searchHouse(query: string): Promise<House[]> {
  const houseService = new HouseService();
  const response = await houseService.search(query);
  return response.data;
}

async function SearchDetail({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = await searchParams;
  const houses = await searchHouse(query);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-0 md:px-8 lg:px-12 grid justify-center col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}

export default SearchDetail;
