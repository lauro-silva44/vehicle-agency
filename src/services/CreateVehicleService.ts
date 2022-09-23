import { AppDataSource } from "./../data-source";
import { Vehicle } from "./../entity/Vehicle";

type VihecleRequest = {
  model: string;
  brand: string;
  yearOfManufacture: string;
  plate: string;
  color: string;
  chassi: string;
  purchaseValue: number;
  bought: boolean;
  photo: string;
};

export class CreateVehicleService {
  async execute({
    brand,
    model,
    yearOfManufacture,
    plate,
    color,
    chassi,
    purchaseValue,
    bought,
    photo,
  }: VihecleRequest): Promise<Error | Vehicle> {
    const vehicleRepo = AppDataSource.getRepository(Vehicle);

    if (await vehicleRepo.findOneBy({ plate })) {
      return new Error("VEHICLE ALREDAY EXISTS!!");
    }

    const newVehicle = vehicleRepo.create({
      brand,
      model,
      yearOfManufacture,
      plate,
      color,
      chassi,
      purchaseValue,
      bought,
      photo,
    });
    console.log("VEHICLE SUCESSFULLY REGISTERED!!");
    vehicleRepo.save(newVehicle);

    return newVehicle;
  }
}
