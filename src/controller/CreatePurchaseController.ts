import { Request, Response } from "express";
import { CreatePurchaseService } from "../services/CreatePurchasesService";

export class CreatePurchaseController {
  async handle(request: Request, response: Response) {
    const { vehicle_id } = request.body;

    const service = new CreatePurchaseService();

    const result = await service.execute({
      vehicle_id,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
