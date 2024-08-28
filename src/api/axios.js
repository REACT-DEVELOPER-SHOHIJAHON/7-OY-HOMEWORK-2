import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    headers : {
        "Content-Type": "application/json"
    },
    timeout: 10000
})

export default apiInstance