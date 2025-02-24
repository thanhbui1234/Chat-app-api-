import express from "express";
// import { MessageController } from "../controllers/MessageController";
// import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();
// const messageController = new MessageController();

/**
 * @swagger
 * /api/messages/send:
 *   post:
 *     summary: Gửi tin nhắn giữa hai người dùng
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - senderId
 *               - receiverId
 *               - content
 *             properties:
 *               senderId:
 *                 type: string
 *               receiverId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tin nhắn được gửi thành công
 *       401:
 *         description: Không có quyền truy cập
 */
// router.post("/send", AuthMiddleware, (req, res) =>
  // messageController.sendMessage(req, res)
// );

export default router;
