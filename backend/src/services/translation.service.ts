import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import FormData from 'form-data';

export const translate = async(text:string):Promise<string>=>{
    try {
        const data:FormData = new FormData();
        data.append('source_language', 'fr');
        data.append('target_language', 'en');
        data.append('text', text);

        const options: AxiosRequestConfig = {
            method: 'POST',
            url: process.env.RAPID_API_URL,
            headers: {
                'x-rapidapi-key': process.env.RAPID_API_KEY,
                'x-rapidapi-host': process.env.RAPID_API_HOST,
                ...data.getHeaders(),
            },
            data: data
        };
        const response: AxiosResponse = await axios.request(options);
        console.log(response.data.data.translatedText)
        return response.data.data.translatedText
    } catch (error:any) {
        console.error(error);
    }
}

