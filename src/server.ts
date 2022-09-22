import express = require("express");
import { AppDataSource } from "./data-source";
import { routes } from "./routes";

const app = express();

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => console.log("SERVER IS ALIVE"));
    app.use(express.json());
    app.use(routes);
  })
  .catch((error) => console.log(error));
