export type House = {
    id: number,
    title: string,
    price: number,
    type: string,
    location: string,
    roomCount: number,
    bathCount: number,
    totalArea: number,
    image: string[],
    ownerId: number,
    owner: {
        id: number,
        fullname: string,
        email: string,
        phoneNumber: string
    }
}