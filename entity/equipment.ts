import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  BaseEntity,
  Entity
} from "typeorm";
import { EquipmentGroup } from "./equipment-group";
import { CleaningMethod } from "./cleaning-method";

@Entity()
export class Equipment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 100
  })
  name: string;

  @ManyToOne(
    type => EquipmentGroup,
    equipmentGroup => equipmentGroup.equipments,
    {
      onDelete: "SET NULL",
      eager: false,
      nullable: true
    }
  )
  equipmentGroup?: EquipmentGroup;

  @OneToOne(type => CleaningMethod, cleaningMethod => cleaningMethod.equipment)
  cleaningMethod?: CleaningMethod;

  constructor(
    name: string,
  ) {
    super();
    this.name = name;
  }
}
