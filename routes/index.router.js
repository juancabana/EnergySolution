import expres from "express";
import authRouter from './auth.router.js';

const router = expres.Router();

router.use('/auth/', authRouter);

export default router
