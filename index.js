import express from "express";
// Cors
import cors from 'cors'
// Router 
import router from './routes/index.router.js';

const app = express()
const port = process.env.PORT

// Access to any domain is enabled
app.use(cors())



app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})
import './utils/auth/index.js';

app.use('/', router);
