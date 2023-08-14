import expres from 'express';
import DailyConsumption from './../services/dailyConsuption.service.js';
import User from './../services/user.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import {createDailyconsuption,  getDailyconsuption} from './../schemas/dailyConsumption.schema.js';
import passport from 'passport';

const router = expres.Router();
const service = new DailyConsumption();
const userService = new User();



// POST
// Crear nuevo registro
router.post(
    '/:id',
    // Protección de ruta a contra los no autenticados
    passport.authenticate('jwt', { session: false }),
    
    validatorHandler(createDailyconsuption, 'body'),
    async (req, res, next) => {



      const { id } = req.params;
      const consumptionData = {...req.body, UserId: parseInt(id)};
      try {

        const user = await userService.findOne(id);

        if (!user) {
          console.log('User not found');
          return;
        }

        const newDailyConsumption = await service.create (consumptionData);
        res.json(newDailyConsumption);
        
      } catch (err) {
        next(err);
      }


      
    }
  );

// GET
// Obtener todos los usuarios
router.get(
  '/',
  // Protección de ruta contra los no autenticados
  passport.authenticate('jwt', { session: false }),
  // Verificar rol del usuario
  async (req, res, next) => {
    try {
      const users = await service.find();
      res.json({ ...users });
    } catch (err) {
      next(err);
    }
  }
);


export default router;
