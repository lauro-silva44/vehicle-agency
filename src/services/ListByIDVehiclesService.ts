import { Vehicle } from "./../entity/Vehicle";
import { AppDataSource } from "./../data-source";
export class ListBuyID {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Vehicle);

    const getTheOne = await repo.findBy({ id: id });

    return getTheOne;
  }
}
