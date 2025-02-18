import HouseCard from "@/components/HouseCard";
import { HouseService } from "@/services/house.service";
import { House } from "@/types/house";

export default async function Home() {
  const houses = await getAllHouses();

  return (
    <div className="max-w-7xl mx-auto mt-12 px-0 md:px-8 lg:px-12 grid justify-center col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}

async function getAllHouses(): Promise<House[]> {
  const houseService = new HouseService();
  const response = await houseService.getall();
  return response.data;
}
