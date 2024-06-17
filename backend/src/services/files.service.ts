const fs = require('fs');
const readline = require('readline');
const path = require('path');

export const uploadFile = async()=>{
    try {
        const coolPath = path.join(__dirname, 'verbs.txt');

        const fileStream = fs.createReadStream(coolPath);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
    
        const words = [];
        for await (const line of rl) {
          words.push({ fr: line });
        }
        return words
    } catch (error) {
        console.error('File upload error:', error);
        throw new Error('uploadFile failed');
    }
}