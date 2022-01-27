import express from "express"

const router = express.Router()

import userController from "../controllers/cards.js"
router.get("/",userController.GET)
router.get("/:post_id",userController.GET)


export default router
