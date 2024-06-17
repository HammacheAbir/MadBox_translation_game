import {Word} from "../db/models/word.model"


export const getWordByOrder = async(order) =>{
    try {
        return await Word.findOne().skip(order);
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('getWordByOrder failed');
    }
}

export const getCount = async() =>{
    try {
        return await Word.countDocuments();
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('getCount failed');
    }
}

export const insertManyWords = async (words)=>{
    try {
        return await Word.insertMany(words);
    } catch (error) {
        console.error('MongoDb error:', error);
        throw new Error('insertManyWords failed');
    }
}