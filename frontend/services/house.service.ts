import axios from "axios"

export class HouseService {
    private apiUrl = "http://localhost:5000/house/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }

    search(text: string) {
        return axios.get(this.apiUrl + "search?text=" + text)
    }

    getById(id: number) {
        return axios.get(this.apiUrl + "getById/" + id)
    }
    
    create(house: any, token: string) {
        return axios.post(this.apiUrl + "add", house, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}