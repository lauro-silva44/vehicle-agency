import "reflect-metadata";
import { DataSource } from "typeorm";
import { Vehicle, Purchase } from "./entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "alvinho",
  password: "",
  database: "vehicle_agency",
  synchronize: true,
  logging: false,
  entities: [Vehicle, Purchase],
  migrations: [],
  subscribers: [],
});
