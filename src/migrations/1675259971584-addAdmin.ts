import { MigrationInterface, QueryRunner } from "typeorm";

export class addAdmin1675259971584 implements MigrationInterface {
    name = 'addAdmin1675259971584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "admin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "admin"`);
    }

}
