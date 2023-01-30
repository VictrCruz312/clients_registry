import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: null })
  telephone: string;

  @Column()
  cellphone: string;

  @CreateDateColumn()
  createdAt: Date;
}
