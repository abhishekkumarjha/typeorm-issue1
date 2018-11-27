import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  Entity
} from "typeorm";
import { Equipment } from "./equipment";

@Entity()
export class EquipmentGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 100
  })
  name: string;

  @OneToMany(type => Equipment, equipment => equipment.equipmentGroup, {
    eager: true
  })
  equipments: Equipment[];

  constructor(
    name: string,
    equipments: Equipment[]
  ) {
    super();
    this.name = name;
    this.equipments = equipments;
  }
}
