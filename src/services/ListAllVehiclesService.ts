import { Vehicle } from "../entity";
import { AppDataSource } from "./../data-source";

export class ListAllVehiclesService {
  async execute() {
    const repo = AppDataSource.getRepository(Vehicle);

    const vehicles = await repo.find();

    return vehicles;
  }
}
