import { Purchase, Vehicle } from "../entity";
import { AppDataSource } from "./../data-source";

type PurchaseRequest = {
  vehicle_id: string;
};

export class CreatePurchaseService {
  async execute({ vehicle_id }: PurchaseRequest): Promise<Error | Purchase> {
    const repo = AppDataSource.getRepository(Purchase);
    const vehicleRepo = AppDataSource.getRepository(Vehicle);

    const alreadySold = await vehicleRepo.findOneBy({ id: vehicle_id });

    if (alreadySold.bought) {
      return new Error("VEHICLE ALREDAY SOLD");
    }
    if (!alreadySold) {
      return new Error("VEHICLE DOES NOT EXISTS");
    }

    const valueOfSell = alreadySold.purchaseValue;

    const purch = repo.create({
      vehicle_id,
      valueOfSell,
    });

    alreadySold.bought = true;

    await repo.save(purch);
    await vehicleRepo.save(alreadySold);
    console.log(alreadySold);

    return purch;
  }
}
