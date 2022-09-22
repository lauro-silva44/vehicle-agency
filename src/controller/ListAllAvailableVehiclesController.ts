import { Request, Response } from "express";
import { ListAllAvailableVehiclesService } from "../services/ListAllAvailableVehiclesService";

export class ListAllAvailableVehiclesController {
  async handle(request: Request, response: Response) {
    const service = new ListAllAvailableVehiclesService();

    const availables = await service.execute();

    return response.json(availables);
  }
}
