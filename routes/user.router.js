import expres from "express";
import UserServices from "./../services/user.service.js";
import validatorHandler from "./../middlewares/validator.handler.js";
import {
  createUserSchema,
  getAndDeleteUserSchema,
} from "./../schemas/user.schema.js";
import passport from "passport";

const router = expres.Router();
const service = new UserServices();

// Obtener todos los usuarios

router.get(
  "/",
  // Protección de ruta contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  async (req, res, next) => {
    try {
      const users = await service.find();
      res.json({ ...users });
    } catch (err) {
      next(err);
    }
  }
);

// Obtener un usuario por id
router.get(
  "/:id",
  // Protección de ruta contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  validatorHandler(getAndDeleteUserSchema, "params"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await service.findOne(id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear nuevo usuario
/**
 * @swagger
 * tags:
 *   name: User
 *   description: Create new user
 * security:
 *   - bearerAuth: []
 * /user:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * 
 *
 */
router.post(
  "/",
  // Protección de ruta a contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newUser = await service.create(body);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE
router.delete(
  "/:id",
  // Protección de ruta contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  validatorHandler(getAndDeleteUserSchema, "params"),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const rta = await service.delete(id);
      res.json({
        rta,
      });
    } catch (err) {
      next(err);
    }
  }
);

// POST
// Crear preferencias del usuario
router.put(
  "/preferences/:id",
  // Protección de ruta a contra los no autenticados
  passport.authenticate("jwt", { session: false }),
  validatorHandler(createUserSchema, "body"),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
      const newUser = await service.updatePreferences(id, body);
      res.json(newUser);
    } catch (err) {
      next(err);
    }
  }
);
export default router;
