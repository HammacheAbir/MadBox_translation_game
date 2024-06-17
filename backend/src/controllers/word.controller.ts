import { getCount, getWordByOrder, insertManyWords } from "../services/wordService.service";
import {uploadFile} from "../services/files.service"
import {translate} from "../services/translation.service"


export const getRandomWord = async (req,res)=>{
    try {
        const count = await getCount();
        const random = Math.floor(Math.random() * count);
        const word = await getWordByOrder(random);
        const translation = await translate(word.fr)
        word.en = translation
        res.status(200).json(word)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const populateWordsList = async(req,res)=>{
    try {
        const words = await uploadFile()

        await insertManyWords(words).then(()=>{
            res.status(200).json({message:"Words inserted successfully !"})
        })

      } catch (error) {
        console.log("error inserting words")
        res.status(500).json({message:error.message})
      }
}
