import express from "express"
import { getRandomWord,populateWordsList } from "../controllers/word.controller"
const multer = require('multer');

export const router = express.Router() 

const upload = multer({ dest: 'uploads/' });

router.post("/upload",upload.single('file'),populateWordsList)

router.get("/random",getRandomWord)