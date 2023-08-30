import { httpInstance } from "./http";

export function getAddByIP() {
    return new Promise((resolve, reject) => {
        httpInstance({
            method: 'GET',
            url: 'https://restapi.amap.com/v3/ip',
            params: {
                key: "8f6cef18e3a4c44188360a38a45c3a88"
            }
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    });
}