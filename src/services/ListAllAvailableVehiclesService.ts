import { Vehicle } from "../entity";
import { AppDataSource } from "./../data-source";

export class ListAllAvailableVehiclesService {
  async execute() {
    const repo = AppDataSource.getRepository(Vehicle);

    const getAvailbles = await repo.findBy({ bought: false });

    return getAvailbles;
  }
}
