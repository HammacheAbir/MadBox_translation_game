import express, { Router } from "express"
import { getRandomWord,populateWordsList } from "../controllers/word.controller"
import multer from 'multer';

export const router:Router = express.Router() 

const upload = multer({ dest: 'uploads/' });

router.post("/upload",upload.single('file'),populateWordsList)

router.get("/random",getRandomWord)