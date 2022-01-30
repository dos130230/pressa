import express from "express"

const router = express.Router()

import intervalController from "../controllers/intervalDate.js"
router.get("/",intervalController.GET)


export default router
