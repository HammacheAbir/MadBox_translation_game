import {Word} from "../db/models/word.model"


export const getWordByOrder = async(order:number):Promise<any> =>{
    try {
        return await Word.findOne().skip(order);
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('getWordByOrder failed');
    }
}

export const getCount = async():Promise<number> =>{
    try {
        return await Word.countDocuments();
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('getCount failed');
    }
}

export const insertManyWords = async (words:any[]):Promise<any>=>{
    try {
        return await Word.insertMany(words);
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('insertManyWords failed');
    }
}