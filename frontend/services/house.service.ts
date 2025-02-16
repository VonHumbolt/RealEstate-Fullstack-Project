import axios from "axios"

export class HouseService {
    private apiUrl = "http://localhost:5000/house/"

    getall() {
        return axios.get(this.apiUrl + "getall")
    }

}