import axios from "axios";
import {user} from "../stores";

export class PlacemarkService {
    baseUrl = "";

    constructor(baseUrl) {
        console.log("HELLO");
        this.baseUrl = "http://localhost:3000";
        console.log(this.baseUrl);
        const donationCredentials = localStorage.donation;
        if (donationCredentials) {
            const savedUser = JSON.parse(donationCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token,
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token,
                });
                localStorage.donation = JSON.stringify({email:email, token:response.data.token});
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("donation");
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
    async addPoi(namePoi,category,description,longitude,latitude){
        try {
            const poiDetails = {
                    name: namePoi,
                    category: category,
                    description: description,
                    img: "",
                    latitude: latitude,
                    longitude: longitude,
            };
            await axios.post(this.baseUrl+ "/api/pois", poiDetails);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getPoi(){
        try {
            const response = await axios.get(this.baseUrl + "/api/pois");
            return response.data;
        } catch (error) {
            return [];
        }
    }
}