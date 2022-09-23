import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("vehicles")
export class Vehicle {
  @PrimaryColumn()
  id: string;

  @Column()
  model: string;

  @Column()
  brand: string;

  @Column()
  yearOfManufacture: string;

  @Column()
  plate: string;

  @Column()
  color: string;

  @Column()
  chassi: string;

  @Column()
  purchaseValue: number;

  @Column()
  bought: boolean;

  @Column()
  photo: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
