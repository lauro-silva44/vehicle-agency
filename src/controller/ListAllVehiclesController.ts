import { Request, Response } from "express";
import { ListAllVehiclesService } from "./../services/ListAllVehiclesService";

export class ListAllVehiclesController {
  async handle(request: Request, response: Response) {
    const service = new ListAllVehiclesService();

    const vehicles = await service.execute();

    return response.json(vehicles);
  }
}
