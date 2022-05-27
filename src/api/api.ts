import axios from "axios";

export const instance = axios.create({
    baseURL: "https://console.firebase.google.com/project/shop-online-firebase1/database/shop-online-firebase1-default-rtdb/data/~2F",
    headers: {
        'API-KEY': "AIzaSyC9MKkWELs2MS5-yEyMFp6xZcalSYirpFE"
    }
})

export const phonesAPI = {
    getPhones() {
        return instance.get('phones/');
    }
}

