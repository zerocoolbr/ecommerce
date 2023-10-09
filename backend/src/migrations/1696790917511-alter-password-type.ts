import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterPasswordType1696790917511 implements MigrationInterface {
    name = 'AlterPasswordType1696790917511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "password" text NOT NULL DEFAULT 'abc'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" numeric NOT NULL`);
    }

}
