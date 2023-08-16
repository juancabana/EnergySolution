import expres from "express";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";
import ConsumptionRouter from "./Consumption.router.js";

const router = expres.Router();

router.use("/auth/", authRouter);
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - phone_number
 *         - area
 *         - floors
 *         - rooms
 *         - appliances
 *       properties:
 *         name:
 *           type: string
 *           description: The name of your user
 *         email:
 *           type: string
 *           description: The email of your user
 *         image:
 *           type: string
 *           description: The image of your user
 *         password:
 *           type: string
 *           description: The password of your user
 *         phone_number:
 *           type: number
 *           description: The phone_number of your user
 *         area:
 *           type: number
 *           description: The area in m^2 of your home
 *         floors:
 *           type: number
 *           description: The floors of your home
 *         rooms:
 *           type: number
 *           description: The rooms of your home
 *         appliances:
 *           type: number
 *           description: The appliances of your home
 *       example:
 *         name: Juan Cabana
 *         email: juand.cabanat@unac.edu.co
 *         password: Password123
 *         phone_number: 3053194924
 *         area: 75
 *         floors: 2
 *         rooms: 3
 *         appliances: 7
 */
router.use("/user/", userRouter);
router.use("/consumption/", ConsumptionRouter);

export default router;
