import { Entity, PrimaryKey } from "@mikro-orm/sqlite";

@Entity()
export class User {
  @PrimaryKey()
  id!: number;
}
