import expres from 'express';
import UserServices from './../services/user.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import {createUserSchema,  getAndDeleteUserSchema} from './../schemas/user.schema.js';
import passport from 'passport';

const router = expres.Router();
const service = new UserServices();


// Obtener un usuario por id
router.get(
  '/:id',
  // Protección de ruta contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  validatorHandler(getAndDeleteUserSchema, 'params'),
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
router.post(
  '/',
  // Protección de ruta a contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  validatorHandler(createUserSchema, 'body'),
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
  '/:id',
  // Protección de ruta contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  validatorHandler(getAndDeleteUserSchema, 'params'),
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
export default router;
