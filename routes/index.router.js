import expres from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import hourConsumptionRouter from "./hourConsumption.router.js";

const router = expres.Router();

router.use("/auth/", authRouter);
router.use("/user/", userRouter);
router.use("/hour-consumption/", hourConsumptionRouter);

export default router;
