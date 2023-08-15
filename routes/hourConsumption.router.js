import expres from 'express';
import HourConsumption from './../services/hourConsumption.service.js';
import User from '../services/user.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import {createHourConsumption,  getHourConsumption} from '../schemas/hourConsumption.schema.js';
import passport from 'passport';

const router = expres.Router();
const service = new HourConsumption();
const userService = new User();



// POST
// Crear nuevo registro
router.post(
    '/:id',
    // Protección de ruta a contra los no autenticados
    passport.authenticate('jwt', { session: false }),
    
    validatorHandler(createHourConsumption, 'body'),
    async (req, res, next) => {
      const { id } = req.params;
      const consumptionData = {...req.body, UserId: parseInt(id)};
      try {
        const user = await userService.findOne(id);
        if (!user) {
          console.log('User not found');
          return;
        }
        const newHourConsumption = await service.create (consumptionData);
        res.json(newHourConsumption);
      } catch (err) {
        next(err);
      }
    }
  );


export default router;
