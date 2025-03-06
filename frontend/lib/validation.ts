import { z } from 'zod'

export const signInSchema = z.object({
    email: z.string({ required_error: "Email is required!" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: z.string({ required_error: "Password is required!" })
        .min(1, "Password is required")

})

export const createFormSchema = z.object({
    title: z.string().min(3).max(100),
    location: z.string().min(20),
    price: z.number(),
    type: z.string().min(4),
    totalArea: z.number(),
    roomCount: z.number(),
    bathCount: z.number(),
    image: z.string().url()
    .refine(async (url) => {
        try {
            const res = await fetch(url, {method: "HEAD"})
            const contentType = res.headers.get("content-type")
            return contentType?.startsWith('image/')
        } catch(error) {
                return false
        }
    })


})