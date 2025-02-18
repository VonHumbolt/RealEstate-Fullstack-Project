import { LoginDto } from "@/types/login.dto"
import { SignupDto } from "@/types/signup.dto"
import axios from "axios"

export class AuthService {
    private apiUrl = "http://localhost:5000/auth/"

    login(data: LoginDto) {
        return axios.post(this.apiUrl + "login", data)
    }

    signup(data: SignupDto) {
        return axios.post(this.apiUrl + "register", data)
    }
}