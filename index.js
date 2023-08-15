import express from "express";
// Cors
import cors from 'cors'
// Router 
import router from './routes/index.router.js';

const app = express()
const port = process.env.PORT

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Access to any domain is enabled
app.use(cors())

app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
});

import './utils/auth/index.js';
app.use('/', router);
