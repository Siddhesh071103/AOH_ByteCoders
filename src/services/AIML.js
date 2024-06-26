import axios from "axios";
import { API_URL_AIML } from "../constant";

async function ChatBot(query) {
    console.log(query);
    const body = {
        question: query
    }

    return new Promise((resolve, reject) => {
        axios.post(`${API_URL_AIML}/askbot`, body)
            .then(async (response) => {
                try {
                    // console.log(response.data);
                    // console.log(response);
                    resolve(response)
                } catch (e) { reject(e) }
            }).catch((err) => {
                console.log(err.response.data);
                reject(err)
            })
    })
}

export const mlservices = { ChatBot }