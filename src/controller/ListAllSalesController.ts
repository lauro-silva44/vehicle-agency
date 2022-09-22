import { Request, Response } from "express";
import { ListSalesService } from "../services/ListSalesService";

export class ListAllSellController {
  async handle(request: Request, response: Response) {
    const service = new ListSalesService();

    const sales = await service.execute();

    return response.json(sales);
  }
}
