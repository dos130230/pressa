import express from "express"

const router = express.Router()

import authController from "../controllers/auth.js"
router.post("/login",authController.LOGIN)


export default router
