import { Router } from "express"
import authController from "../controllers/auth.controller.js"
const router = Router()

router.get("/test", (req, res) => {
    res.json({ message: "success" })
})
    .post("/login", authController.loginController)
    .post("/register", authController.registerContrller)

export default router