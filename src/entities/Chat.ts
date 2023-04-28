import { Entity, ManyToOne, Ref, Unique, PrimaryKeyProp } from "@mikro-orm/sqlite";
import { User } from "./User";

@Unique({ properties: ["owner", "recipient"] })
@Entity()
export class Chat {
  @ManyToOne({ primary: true })
  owner!: Ref<User>;

  @ManyToOne({ primary: true })
  recipient!: Ref<User>;

  [PrimaryKeyProp]?: ['owner', 'recipient'];
}
