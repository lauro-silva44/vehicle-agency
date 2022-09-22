import { ListAllSellController } from "./controller/ListAllSalesController";
import { Router } from "express";
import {
  CreatePurchaseController,
  CreateVehicleController,
  ListAllAvailableVehiclesController,
  ListAllVehiclesController,
} from "./controller";

const routes = Router();

routes.post("/vehicles", new CreateVehicleController().handle);
routes.get("/vehicles", new ListAllVehiclesController().handle);
routes.get(
  "/vehicles-availables",
  new ListAllAvailableVehiclesController().handle
);

routes.post("/purches", new CreatePurchaseController().handle);
routes.get("/purches", new ListAllSellController().handle);

export { routes };
