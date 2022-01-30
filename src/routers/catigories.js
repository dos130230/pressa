import express from "express"

const router = express.Router()

import catigorController from "../controllers/catigories.js"
router.get("/",catigorController.GET)


export default router
