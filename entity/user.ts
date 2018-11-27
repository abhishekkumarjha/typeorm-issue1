import {
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  BaseEntity,
  Entity,
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

  //The profile is optional as we may have users without profile info
  @OneToOne(type => Profile, profile => profile.user)
  profile?: Profile;

  constructor(
    name: string,
    profile?: Profile
  ) {
    super();
    this.name = name;
    this.profile = profile
  }
}
