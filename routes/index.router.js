;import expres from "express";
import userRouter from './user.router.js';
import authRouter from './auth.router.js';
import dailyConsumptionRouter from './dailyConsumption.router.js'

const router = expres.Router();

router.use('/auth/', authRouter);
router.use('/user/', userRouter);
router.use('/daily-consuption/', dailyConsumptionRouter);

export default router
