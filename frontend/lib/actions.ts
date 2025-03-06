'use server'

import { auth } from "@/auth"
import { HouseService } from "@/services/house.service"

export const createHouseAd = async (state: any, form: any) => {
    const session = await auth()

    if(!session) return JSON.parse(JSON.stringify({error: "Not signed in!", status: "ERROR"}))

    try {

        form = {...form, ownerId: Number(session.userId)}
        console.log(form)
        const houseService = new HouseService()

        return houseService.create(form, session.jwt).then(res => {
            console.log("Result ", res.data)
           return JSON.parse(JSON.stringify({error: "", status: "SUCCESS", data: res.data}))
        }).catch(err => {
            return JSON.parse(JSON.stringify({error: "Not signed in!", status: "ERROR"}))
        })

    } catch(error) {
        console.log(error)
    }
}