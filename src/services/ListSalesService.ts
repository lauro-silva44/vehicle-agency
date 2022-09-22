import { Purchase } from "./../entity/Purchase";
import { AppDataSource } from "./../data-source";

export class ListSalesService {
  async execute() {
    const repo = AppDataSource.getRepository(Purchase);

    const sales = await repo.find({
      relations: ["vehicle"],
    });

    return sales;
  }
}
