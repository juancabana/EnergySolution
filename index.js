import express from "express";
// Cors
import cors from "cors";
// Middlewares
import {
  errorHandler,
  logErrors,
  boomErrorHandler,
} from "./middlewares/error.handler.js";
// Router
import router from "./routes/index.router.js";
// Environment variables
import * as dotenv from "dotenv";
import { dailyScheduledTasks } from "./utils/scheduledFunctions/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

dailyScheduledTasks();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Access to any domain is enabled
app.use(cors());

app.listen(port, () => {
  console.log(`App running at port http://localhost:${port}`);
});

import "./utils/auth/index.js";
app.use("/", router);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
