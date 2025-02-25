import express from "express";
import { AuthController } from "../controllers/auth.controller";

const router = express.Router();
const authController = new AuthController();

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Đăng ký tài khoản mới
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *               - password
 *               - email
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               age:
 *                type: number  
 *               email:  
 *                type: string
 *               
 *     responses:
 *       200:
 *         description: Đăng ký thành công
 *       400:
 *         description: Lỗi đầu vào
 */
router.post("/register", (req, res) => authController.register(req, res));

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Đăng nhập và nhận token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công, trả về token
 *       401:
 *         description: Sai tài khoản hoặc mật khẩu
 */
router.post("/login", (req, res) => authController.login(req, res));

export default router;
