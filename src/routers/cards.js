import express from "express"

const router = express.Router()
import authToken from "../middlewares/authToken.js"

import userController from "../controllers/cards.js"
router.get("/",userController.GET)
router.get("/:post_id",userController.GET)


router.get("/admin/check",authToken,userController.ADMIN)
router.get("/admin/check/:post_id",authToken,userController.ADMIN)


export default router
