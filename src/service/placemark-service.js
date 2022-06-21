import axios from "axios";

export class PlacemarkService {
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        axios.defaults.headers.common["Authorization"] = "";
    }

    async signup(name, nickname, email, password) {
        try {
            console.log("here")
            const userDetails = {
                name: name,
                nickname:nickname,
                email: email,
                password: password,
            };
            await axios.post(this.baseUrl + "/api/users",userDetails);
            return true;
        } catch (error) {
            return false;
        }
    }
}