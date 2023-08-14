import express from "express";
// Enviroment variables
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// Cors
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Access to any domain is enabled
app.use(cors())



app.listen(port, () => {
    console.log(`App running at port http://localhost:${port}`);
})

app.get('/', (req, res) => {
    res.send('Hello world')
})