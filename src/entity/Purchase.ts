import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Vehicle } from "../entity";

@Entity("purchases")
export class Purchase {
  @PrimaryColumn()
  id: string;
  @Column({ default: () => "NOW()" })
  dateOfSell: Date;

  @Column()
  valueOfSell: number;

  @Column()
  vehicle_id: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  @JoinColumn({ name: "vehicle_id" })
  vehicle: Vehicle;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
