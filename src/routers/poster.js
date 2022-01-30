import express from "express"

const router = express.Router()

import postValidator from "../middlewares/post_validation.js"
import authToken from "../middlewares/authToken.js"

import multer from "multer"
let imgMulter = multer()

import postController from "../controllers/poster.js"
router.post("/",imgMulter.single('file'),postValidator,postController.POST)
router.put("/",authToken,postController.PUT)
router.delete("/",authToken,postController.DELETE)

export default router
