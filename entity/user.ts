import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  BaseEntity,
  Entity
} from "typeorm";
import { UserGroup } from "./user-group";
import { Profile } from "./profile";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 100
  })
  name: string;

  @ManyToOne(
    type => UserGroup,
    equipmentGroup => equipmentGroup.users
  )
  group?: UserGroup;

  @OneToOne(type => Profile, profile => profile.user)
  profile?: Profile;

  constructor(
    name: string,
  ) {
    super();
    this.name = name;
  }
}
