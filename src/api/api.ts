import axios from "axios";

export const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://shop-online-firebase1-default-rtdb.europe-west1.firebasedatabase.app",
    headers: {
        'API-KEY': "AIzaSyC9MKkWELs2MS5-yEyMFp6xZcalSYirpFE"
    }
})

export const phonesAPI = {
    getPhones() {
        return instance.get('phones/');
    }
}

