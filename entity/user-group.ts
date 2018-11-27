import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  Entity
} from "typeorm";
import { User } from "./user";

@Entity()
export class UserGroup extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 100
  })
  name: string;

  @OneToMany(type => User, user => user.group, {
    eager: true
  })
  users: User[];

  constructor(
    name: string,
    users: User[]
  ) {
    super();
    this.name = name;
    this.users = users;
  }
}
