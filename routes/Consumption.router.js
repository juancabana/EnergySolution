import expres from "express";
import Consumption from "./../services/Consumption.service.js";
import User from "../services/user.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import { createConsumption } from "../schemas/consumption.schema.js";
import passport from "passport";

const router = expres.Router();
const service = new Consumption();
const userService = new User();

// POST
// Crear nuevo registro
router.post(
  "/:id",
  // Protección de ruta a contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  // Validación de datos
  validatorHandler(createConsumption, "body"),
  async (req, res, next) => {
    const { id } = req.params;
    const consumptionData = { ...req.body, UserId: parseInt(id) };
    try {
      const user = await userService.findOne(id);
      if (user) {
        const newConsumption = await service.create(consumptionData);
        res.json(newConsumption);
      }
    } catch (err) {
      next(err);
    }
  }
);

export default router;
