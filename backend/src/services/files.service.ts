import fs from'fs';
import readline from 'readline';
import path from 'path';

type fileWord  = {
  fr:string
}

export const uploadFile = async():Promise<fileWord[]>=>{
    try {
        const coolPath:string = path.join(__dirname, 'verbs.txt');

        const fileStream = fs.createReadStream(coolPath);
        const rl = readline.createInterface({
          input: fileStream,
          crlfDelay: Infinity
        });
    
        const words:fileWord[] = [];
        for await (const line of rl) {
          words.push({ fr: line });
        }
        return words
    } catch (error) {
        console.error('File upload error:', error);
        throw new Error('uploadFile failed');
    }
}