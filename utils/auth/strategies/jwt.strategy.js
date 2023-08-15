import { Strategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv' 

dotenv.config()

const jwtSecret = process.env.JWT_SECRET
const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload)
});

export default jwtStrategy;
