import { Router } from "express";
import  AuthRouter  from "./auth.routes";
import  MessageRouter  from "./message.routes";

const router = Router();

router.use('/v1/auth',AuthRouter);
router.use("/v1/message", MessageRouter);

export default router
