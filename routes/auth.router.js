import express from "express";
import passport from "passport";
import AuthService from "../services/auth.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import { authenticateSchema } from "./../schemas/auth.schema.js";

const router = express.Router();
const service = new AuthService();

router.post(
  "/login",
  // capa de autenticación
  validatorHandler(authenticateSchema, "body"),
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);  

export default router;
