import Hero from "@/components/Hero";
import HouseCard from "@/components/HouseCard";
import { HouseService } from "@/services/house.service";
import { House } from "@/types/house";

export default async function Home({searchParams} : {searchParams: Promise<{query? : string}>}) {
  
  const query = (await searchParams).query
  // const params = { search: query || null };

  const houses = query ? await searchHouse(query) : await getAllHouses();
  

  return (
    <section className="max-w-7xl mx-auto mt-12">
      <Hero query={query} />
      <p className="text-2xl font-semibold px-0 md:px-8 lg:px-12 mt-5">
        {query ? `Search results for "${query}"` : ""}
      </p>
      <div
      className="mt-8 px-0 md:px-8 lg:px-12 grid justify-center col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
      </section>
  );
}



async function getAllHouses(): Promise<House[]> {
  const houseService = new HouseService();
  const response = await houseService.getall();
  return response.data;
}

async function searchHouse(text:string): Promise<House[]> {
  const houseService = new HouseService();
  const response = await houseService.search(text);
  return response.data;
}
