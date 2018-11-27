import {
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
} from "typeorm";
import { Equipment } from "./equipment";

@Entity()
export class CleaningMethod extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("double precision")
  rinseVolumeMl: number;

  @Column({ type: "int", nullable: false })
  equipmentId: number;

  @OneToOne(type => Equipment, equipment => equipment.cleaningMethod, {
    onDelete: "CASCADE",
    eager: false,
    nullable: false
  })
  @JoinColumn({ name: "equipmentId" })
  equipment?: Equipment;

  constructor(
    equipmentId: number,
    rinseVolumeMl: number,
  ) {
    super();

    this.equipmentId = equipmentId;
    this.rinseVolumeMl = rinseVolumeMl;
  }
}
