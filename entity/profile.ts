import {
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  Entity,
} from "typeorm";
import { User } from "./user";

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gender!: string;

  @Column()
  photo!: string;

  @OneToOne(type => User, user => user.profile)
  @JoinColumn()
  user!: User;
}
