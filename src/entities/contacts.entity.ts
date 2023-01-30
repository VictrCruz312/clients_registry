import {
  CreateDateColumn,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("contact")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  telephone: string;

  @Column()
  cellphone: string;

  @CreateDateColumn()
  createdAt: Date;
}
