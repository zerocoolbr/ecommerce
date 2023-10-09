import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUniqueConstraintOnUserEmail1696874415519 implements MigrationInterface {
    name = 'AddUniqueConstraintOnUserEmail1696874415519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_USERMAIL" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_USERMAIL"`);
    }

}
