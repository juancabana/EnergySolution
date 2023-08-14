import expres from "express";
import authRouter from './auth.router.js';
import userRouter from './user.router.js'

const router = expres.Router();

router.use('/auth/', authRouter);
router.use('/user/', userRouter);

export default router
