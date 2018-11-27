import "source-map-support/register";
import "reflect-metadata";

import { ConnectionOptions, createConnection } from "typeorm";
import { Profile } from "./entity/profile";
import { User } from "./entity/user";
import { UserGroup } from "./entity/user-group";

const entities = [ User, UserGroup, Profile];

async function main() {
  const options: ConnectionOptions = {
    name: "default",
    type: "sqlite",
    database: ":memory:",
    logging: ["error"],
    entities,
    synchronize: true
  };
  await createConnection(options);

  //This works
  const user = await new User("Abhi").save();

  //This fails
  const group = await new UserGroup("groupx", [user]).save();
}

main().catch(e => console.error("Failed!\n", e));
