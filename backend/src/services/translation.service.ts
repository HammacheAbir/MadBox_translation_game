const axios = require('axios');
const FormData = require('form-data');


export const translate = async(text)=>{
    try {

        const data = new FormData();
        data.append('source_language', 'fr');
        data.append('target_language', 'en');
        data.append('text', text);

        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'x-rapidapi-key': '1e422715abmshb1845dec85e983ep15ba6ejsnfddf71f17ca4',
            'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
            ...data.getHeaders(),
        },
        data: data
        };
        const response = await axios.request(options);
        return response.data.data.translatedText
    } catch (error) {
        console.error(error);
    }
}

