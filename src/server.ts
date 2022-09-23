import express = require("express");
import { AppDataSource } from "./data-source";
import { routes } from "./routes";
import cors = require("cors");

const app = express();
app.use(cors()); // Use this after the variable declaration

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => console.log("SERVER IS ALIVE"));
    app.use(express.json());
    app.use(routes);
  })
  .catch((error) => console.log(error));
