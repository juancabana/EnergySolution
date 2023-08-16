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
// Swagger
import swagerUI from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
// Environment variables
import * as dotenv from "dotenv";
import { dailyScheduledTasks } from "./utils/scheduledFunctions/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Energy Solution",
      version: "0.1.0",
      description:
        "This is an API made for energy solutions",
    },
    servers: [
      {
        url: "http://localhost:3005",
      },
    ],
  },
  apis: ["./routes/*.js"],
  
};
const specs = swaggerJsdoc(options);

// Here the tasks scheduled with node-cron are executed
dailyScheduledTasks();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Access to any domain is enabled
app.use(cors());

app.listen(port, () => {
  console.log(`App running at port http://localhost:${port}`);
});

// Middlewares
import "./utils/auth/index.js";

app.use("/", router);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
app.use(
  "/api-doc",
  swagerUI.serve,
  swagerUI.setup(specs, { explorer: true })
);
