import express from "express"
import { homePage, aboutPage, contactPage } from "./controller.js"
const router = express.Router()

router.get('/', homePage)
router.get('/about', aboutPage)
router.get('/contact', contactPage)

export default router;
