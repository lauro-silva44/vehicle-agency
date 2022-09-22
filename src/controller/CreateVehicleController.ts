import { Request, Response } from "express";
import { CreateVehicleService } from "../services/CreateVehicleService";

export class CreateVehicleController {
  async handle(request: Request, response: Response) {
    const {
      model,
      brand,
      yearOfManufacture,
      plate,
      color,
      chassi,
      purchaseValue,
      bought,
    } = request.body;
    const service = new CreateVehicleService();
    const result = await service.execute({
      model,
      brand,
      yearOfManufacture,
      plate,
      color,
      chassi,
      purchaseValue,
      bought,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
