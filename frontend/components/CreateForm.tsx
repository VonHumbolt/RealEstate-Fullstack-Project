"use client";
import { createHouseAd } from "@/lib/actions";
import { createFormSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { toast } from "sonner";
import {z} from 'zod'

function CreateForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

    const router = useRouter()

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    console.log(formData.get('title'))
    try {
        const formValues = {
            title: formData.get("title") as string,
            location: formData.get("location") as string,
            price: Number(formData.get("price") as string),
            type: formData.get("type") as string,
            totalArea: Number(formData.get("totalArea") as string),
            roomCount: Number(formData.get("roomCount") as string),
            bathCount: Number(formData.get("bathCount") as string),
            image: formData.get("image") as string,
        }

        await createFormSchema.parseAsync(formValues)

        const result = await createHouseAd(prevState, formValues)
        if(result.status == "SUCCESS") {
            toast.success("House ad created successfully!")
            router.push(`/house/${result.data.id}`)
        }
        console.log(result)

        console.log(formValues)

    } catch(error) {

        if(error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors;
            setErrors(fieldErrors as unknown as Record<string, string>)

            return {...prevState, error: "Validation failed", status: "ERROR"}
        }

        return {...prevState, error: "Unexpected error", status: "ERROR"}

    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <form
      action={formAction}
      className="bg-white p-6 rounded-xl border shadow-md w-96 md:w-[650px]"
    >
      <div className="flex flex-col space-y-1">
        <label className="text-base text-black font-medium">Title</label>
        <input
          name="title"
          type="text"
          placeholder="3+1 Downtown Flat"
          className="border rounded-xl p-2"
        />
        {errors.title && <p className="text-secondary font-semibold">{errors.title}</p>}
      </div>

      <div className="flex flex-col space-y-1 mt-4">
        <label className="text-base text-black font-medium">Location</label>
        <input
          name="location"
          type="text"
          placeholder="Johnston Street, Michigan/USA"
          className="border rounded-xl p-2"
        />
        {errors.location && <p className="text-secondary font-semibold">{errors.location}</p>}
      </div>

      <div className="flex items-center justify-between space-y-1 gap-2 mt-4">
        <div className="flex flex-col w-full">
          <label className="text-base text-black font-medium">Price</label>
          <input
            name="price"
            type="number"
            placeholder="$349,999"
            className="border rounded-xl p-2"
          />
          {errors.price && <p className="text-secondary font-semibold">{errors.price}</p>}
        </div>
        <div className="flex flex-col w-full">
          <label className="text-base text-black font-medium">Type</label>
          <input
            name="type"
            type="text"
            placeholder="For sale"
            className="border rounded-xl p-2"
          />
          {errors.type && <p className="text-secondary font-semibold">{errors.type}</p>}
        </div>
      </div>

      <div className="flex items-center justify-between space-y-1 gap-2 mt-4">
        <div className="flex flex-col w-44">
          <label className="text-base text-black font-medium">Area</label>
          <input
            name="totalArea"
            type="number"
            placeholder="160m2"
            className="border rounded-xl p-2"
          />
          {errors.totalArea && <p className="text-secondary font-semibold">{errors.totalArea}</p>}
        </div>
        <div className="flex flex-col w-44">
          <label className="text-base text-black font-medium">Room Count</label>
          <input
            name="roomCount"
            type="number"
            placeholder="3"
            className="border rounded-xl p-2"
          />
          {errors.roomCount && <p className="text-secondary font-semibold">{errors.roomCount}</p>}
        </div>
        <div className="flex flex-col w-44">
          <label className="text-base text-black font-medium">Bath Count</label>
          <input
            name="bathCount"
            type="number"
            placeholder="2"
            className="border rounded-xl p-2"
          />
          {errors.bathCount && <p className="text-secondary font-semibold">{errors.bathCount}</p>}
        </div>
      </div>

      <div className="flex flex-col space-y-1 mt-4">
        <label className="text-base text-black font-medium">Image Url</label>
        <input
          name="image"
          type="text"
          placeholder="https://unsplash.com/..."
          className="border rounded-xl p-2"
        />
        {errors.image && <p className="text-secondary font-semibold">{errors.image}</p>}
      </div>

      <button
        disabled={isPending}
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-md mt-4 w-full"
      >
        {isPending ? "Submitting" : "Publish your House"}
      </button>
    </form>
  );
}

export default CreateForm;
