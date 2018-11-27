import "source-map-support/register";
import "reflect-metadata";

import { ConnectionOptions, createConnection } from "typeorm";
import { CleaningMethod } from "./entity/cleaning-method";
import { Equipment } from "./entity/equipment";
import { EquipmentGroup } from "./entity/equipment-group";

const entities = [ Equipment, EquipmentGroup, CleaningMethod];

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

  const equipment = await new Equipment("e1").save();

  const group = await new EquipmentGroup("groupx", [equipment]).save();
}

main().catch(e => console.error("Failed!\n", e));
